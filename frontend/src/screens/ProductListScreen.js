/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Container,
  Modal,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { listBrands, createBrand, updateBrand } from "../actions/brandActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const ProductListScreen = () => {
  const params = useParams();
  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const brandList = useSelector((state) => state.brandList);
  const { brands } = brandList;
  const { loading, error, products, page, pages } = productList;

  console.log("page number", pageNumber);

  const [show, setShow] = useState(false);
  const [brandId, setBrandId] = useState("");
  const [brand, setBrand] = useState("");
  const [brandDescription, setBrandDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
      dispatch(listBrands());
    }
  }, [
    dispatch,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  // brand handlers

  const createBrandHandler = () => {
    dispatch(createBrand());
  };

  const updateBrandHandler = async (e) => {
    e.preventDefault();
    console.log("Brand - ", brand, " desc - ", brandDescription);
    const brand_key = brand?.toLowerCase()?.replaceAll(" ", "_");
    try {
      dispatch(
        updateBrand({
          _id: brandId,
          name: brand,
          description: brandDescription,
          brand_key: brand_key,
        })
      );

      dispatch(listBrands());
    } catch (error) {}
  };

  const handleBrandForm = (brand) => {
    handleShow();
    setBrandId(brand._id);
    setBrand(brand.name);
    setBrandDescription(brand.description);
  };

  return (
    <>
      <Row className="align-items-center">
        <Container>
          <Col>
            <h1 className="title">Products</h1>
          </Col>
          <Col className="text-right">
            <Button className="my-3" onClick={createProductHandler}>
              <i className="fas fa-plus"></i> Create Product
            </Button>
          </Col>
        </Container>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Container>
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>₹ {product.price}</td>
                      <td>
                        {product.category.replaceAll("_", " ").toUpperCase()}
                      </td>
                      <td>{product.brand}</td>
                      <td>
                        <Link to={`/admin/product/${product._id}/edit`}>
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(product._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Paginate pages={pages} page={page} isAdmin={true} />

              {/* Brands */}

              <h3 className="title">Brands</h3>
              <Row className="align-items-center">
                <Container>
                  <Col className="text-right">
                    <Button className="my-3" onClick={createBrandHandler}>
                      <i className="fas fa-plus"></i> Create Brand
                    </Button>
                  </Col>
                </Container>
              </Row>
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Brand Name</th>
                    <th>Description</th>
                    <th>key</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand._id}>
                      <td>{brand._id}</td>
                      <td>{brand.name}</td>
                      <td>{brand.description}</td>
                      <td>{brand.brand_key}</td>
                      <td>
                        <Button
                          variant="light"
                          className="btn-sm"
                          onClick={() => handleBrandForm(brand)}
                        >
                          <i className="fas fa-edit"></i>
                        </Button>

                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(brand._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Brand update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormContainer>
                <Form onSubmit={updateBrandHandler}>
                  <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      value={brandDescription}
                      onChange={(e) => setBrandDescription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button> */}
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </FormContainer>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
