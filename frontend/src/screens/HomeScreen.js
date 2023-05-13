import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import {listProducts} from '../actions/productActions';

const HomeScreen = () => {
  const params = useParams();

  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {loading, error, products, page, pages} = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container fluid>
            <Row>
              <section className="banner">
                <div className="banner-overlay"></div>
                <Image src="/images/banner-main.jpeg" title="banner" />
                <div className="banner-content text-white text-center">
                  <h1>Munna Poultry Farm</h1>
                  <p>
                    All of our chicken grown by our farmers for best quality
                  </p>
                  <Button>Discover More</Button>
                </div>
              </section>
            </Row>
          </Container>
          <Container>
            <h1>Latest Feeds</h1>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
