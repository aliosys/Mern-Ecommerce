import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import poultryImage from "../assets/images/poultry-image2.jpeg";
import poultryEquipment from "../assets/images/poultry-equipments.png";
import freshChicken from "../assets/images/chicken.jpg";
import chicks from "../assets/images/chicks-image.jpeg";

const HomeScreen = () => {
  const params = useParams();

  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

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
          {/* <Container fluid>
            <Row>
              <section className="banner">
                <div className="banner-overlay"></div>
                <Image src="/images/banner-main.jpeg" title="banner" />
                <div className="banner-content text-white text-center">
                  <h1 className="title-h1">Munna Poultry Farm</h1>
                  <p className="sub-title bold">
                    All of our chicken grown by our farmers for best quality
                  </p>
                  <Button>
                    <Link className="text-white" to="/about">
                      Discover More
                    </Link>
                  </Button>
                </div>
              </section>
            </Row>
          </Container> */}
          <Container fluid>
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="images/banner-main.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/feed-banner.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/feed-banner2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </Container>
          {/* Services provided */}
          <section className="services py-4">
            <Container className="py-4">
              <Row className="py-4">
                <Col className="col-4" xs={12} lg={4}>
                  <h4>Quality, innovation and food safety.</h4>
                </Col>
                <Col className="col-8 " xs={12} lg={8}>
                  <p>
                    Our poultry business is your one-stop destination for all
                    your poultry needs. We offer a diverse range of services,
                    including the sale of high-quality feeds, live chickens, and
                    premium chicken products. With a strong commitment to
                    quality, we strive to provide the best products in the
                    state. Whether you're looking for nutritious feeds to
                    support healthy growth or seeking the freshest live
                    chickens, our dedicated team ensures that you receive
                    exceptional quality and service. Experience the difference
                    with us and trust us to meet all your poultry requirements
                    with excellence.
                  </p>
                </Col>
              </Row>
              <Row className="py-4">
                <Col className="col-3 pt-4" xs={12} lg={3}>
                  <div className="icon">
                    <img src={poultryImage} alt="poultry" />
                  </div>
                  <h4 className="sub-title text-bold mt-2">poultry</h4>
                  <p>
                    Discover a wide range of poultry products, from
                    premium-grade meat to farm-fresh eggs, for a delicious and
                    nutritious dining experience.
                  </p>
                  <Button>Discover More</Button>
                </Col>
                <Col className="col-3 pt-4" xs={12} lg={3}>
                  <div className="icon">
                    <img src={poultryEquipment} alt="poultry equipment" />
                  </div>
                  <h4 className="sub-title text-bold mt-2">
                    Poultry Equipments
                  </h4>
                  <p>
                    Find top-of-the-line equipment to optimize efficiency and
                    productivity in your poultry operations, from incubators to
                    feeders and ventilation systems.
                  </p>
                  <Button>Discover More</Button>
                </Col>
                <Col className="col-3 pt-4" xs={12} lg={3}>
                  <div className="icon">
                    <img src={freshChicken} alt="fresh chicken" />
                  </div>
                  <h4 className="sub-title text-bold mt-2">Fresh Chicken</h4>
                  <p>
                    Indulge in the finest, farm-fresh chicken for tender,
                    flavorful meals that will satisfy your taste buds and
                    elevate your culinary creations.
                  </p>
                  <Button>Discover More</Button>
                </Col>
                <Col className="col-3 pt-4" xs={12} lg={3}>
                  <div className="icon">
                    <img src={chicks} alt="chicks" />
                  </div>
                  <h4 className="sub-title text-bold mt-2">Chicks</h4>
                  <p>
                    Choose high-quality broiler breed chicks bred for optimal
                    growth and meat production, ensuring the success of your
                    poultry business with superior yields.
                  </p>
                  <Button>Discover More</Button>
                </Col>
              </Row>
            </Container>
          </section>
          <Container>
            <h1 className="title">Latest Feeds</h1>
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
              keyword={keyword ? keyword : ""}
            />
          </Container>

          <Container className="py-4" fluid>
            <Row>
              <section className="whyussection position-relative d-flex align-items-center">
                <div className="section-overlay"></div>
                <Image src="/images/farm.jpeg" title="banner" />
                <Container className="py-4">
                  <Row>
                    <Col className="col-6 whyussection-content" xs={12} lg={6}>
                      <h2>Why Choose Us</h2>
                      <h1>get the different taste here</h1>
                      <ul>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          High-Quality Products
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Experienced and Knowledgeable Team
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Varied Product Range: Munna Poultry Farm offers a
                          diverse range of poultry products, including different
                          breeds of chickens, eggs, and poultry feed. This
                          variety enables you to choose products that best suit
                          your specific requirements and preferences.
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Strong Reputation: The farm has built a strong
                          reputation in the industry due to its consistent
                          delivery of high-quality products and exceptional
                          customer service. Choosing Munna Poultry Farm means
                          aligning yourself with a trusted and reliable brand.
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Hygienic and Sustainable Practices
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Competitive Pricing
                        </li>
                        <li>
                          <span className="icon check-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </span>
                          Long-Standing Industry Presence
                        </li>
                      </ul>
                    </Col>
                    <Col className="col-6 chicken-head" xs={12} lg={6}>
                      <Image
                        src="/images/chicken-portrait.jpeg"
                        title="banner"
                      />
                    </Col>
                  </Row>
                </Container>
              </section>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
