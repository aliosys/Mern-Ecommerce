import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Product from "../components/Product";
import HeroSection from "../components/HeroSection";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

import poultryImage from "../assets/images/poultry-image2.jpeg";
import poultryFarmBanner from "../assets/images/mpf-banner.jpg";
import poultryEquipment from "../assets/images/poultry-equipments.png";
import freshChicken from "../assets/images/fresh-chicken.png";
import chicks from "../assets/images/chicks-image.jpeg";
import banner from "../assets/images/mpf-banner-2.png";
import Carousel from "react-bootstrap/Carousel";
import anmolBanner from "../assets/images/anmol-banner.jpeg";
import anmolBanner2 from "../assets/images/anmol-banner2.png";
import banner2 from "../assets/images/mpf-banner3.png";

const About = () => {
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
          <section className="container-fluid p-0">
            <Row>
              <div className="col-12">
                <HeroSection
                  heroTitle="About us"
                  heroContent="  Welcome to our Munna Poultry Farm, established in 1992 and
                    officially registered in 2006. With over three decades of
                    experience in the industry, we have built a strong
                    foundation and garnered a reputation for providing
                    high-quality poultry products to our valued customers."
                />
              </div>
            </Row>
          </section>
          {/* Services provided */}
          <section className="about py-4">
            <Container className="py-4">
              <Row className="py-4">
                <Col className="col-8 mx-auto">
                  <Image
                    src="/images/about.png"
                    alt="mpf-about"
                    width="100%"
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                  <p className="mt-4">
                    At Munna Poultry Farm, we take immense pride in our
                    commitment to excellence and our passion for delivering
                    fresh and nutritious poultry products. From the very
                    beginning, our aim has been to raise healthy, happy chickens
                    in a safe and sustainable environment.
                  </p>
                  <p>
                    Our journey started in 1992 when our founder, Janab Late.
                    Asgar Ali (Elder Brother) and Janab Ali Akhtar (Munna,
                    Younger Brother), embarked on a mission to create a poultry
                    business that would stand out for its dedication to quality
                    and customer satisfaction. Over the years, we have stayed
                    true to this vision and continuously evolved our practices
                    to meet the ever-changing needs of the market.
                  </p>
                  <p>
                    Throughout our history, we have invested in state-of-the-art
                    facilities and modern farming techniques to ensure the
                    well-being of our chickens and maintain the highest
                    standards of hygiene and food safety. We understand that
                    healthy chickens produce superior meat and eggs, which is
                    why we prioritize their welfare, providing them with optimal
                    living conditions, balanced nutrition, and regular
                    veterinary care.
                  </p>
                  <p>
                    As a registered business since 2006, we have adhered to all
                    regulatory requirements and maintain a strong commitment to
                    ethical and sustainable practices. Our team of experienced
                    professionals, including farmers, veterinarians, and quality
                    control experts, work diligently to ensure that every aspect
                    of our operations meets and exceeds industry standards.
                  </p>
                  <p>
                    Our products range from premium-grade chicken meat to
                    farm-fresh eggs, each carefully selected and processed to
                    deliver exceptional taste and nutritional value. Whether you
                    are a local restaurant, a retailer, or an individual
                    consumer, we strive to provide you with poultry products
                    that meet your expectations in terms of freshness, flavor,
                    and overall quality.
                  </p>
                  <p>
                    We take pride in our long-standing relationships with our
                    customers, suppliers, and partners, and consider them an
                    integral part of our success story. We value open
                    communication, reliability, and trust, ensuring that we
                    maintain transparent and mutually beneficial relationships
                    with all stakeholders.
                  </p>
                  <p>
                    As we continue to grow and expand our business, we remain
                    committed to innovation, sustainability, and delivering
                    excellence in all aspects of our operations. We are
                    dedicated to serving our community, promoting responsible
                    farming practices, and contributing to the overall
                    well-being of our environment.
                  </p>
                  <p>
                    Thank you for choosing Munna Poultry Farm. We look forward
                    to being your trusted source for premium poultry products
                    and providing you with an exceptional experience every time.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <Row>
            <Container fluid>
              {/* Services provided */}
              <section className="services py-4">
                <Container className="py-4">
                  <Row className="py-4">
                    <Col className="col-4" xs={12} lg={4}>
                      <h4>Quality, innovation and food safety.</h4>
                    </Col>
                    <Col className="col-8 " xs={12} lg={8}>
                      <p>
                        Our poultry business is your one-stop destination for
                        all your poultry needs. We offer a diverse range of
                        services, including the sale of high-quality feeds, live
                        chickens, and premium chicken products. With a strong
                        commitment to quality, we strive to provide the best
                        products in the state. Whether you're looking for
                        nutritious feeds to support healthy growth or seeking
                        the freshest live chickens, our dedicated team ensures
                        that you receive exceptional quality and service.
                        Experience the difference with us and trust us to meet
                        all your poultry requirements with excellence.
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
                        premium-grade meat to farm-fresh eggs, for a delicious
                        and nutritious dining experience.
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
                        Find top-of-the-line equipment to optimize efficiency
                        and productivity in your poultry operations, from
                        incubators to feeders and ventilation systems.
                      </p>
                      <Button>Discover More</Button>
                    </Col>
                    <Col className="col-3 pt-4" xs={12} lg={3}>
                      <div className="icon">
                        <img src={freshChicken} alt="fresh chicken" />
                      </div>
                      <h4 className="sub-title text-bold mt-2">
                        Fresh Chicken
                      </h4>
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
                        Choose high-quality broiler breed chicks bred for
                        optimal growth and meat production, ensuring the success
                        of your poultry business with superior yields.
                      </p>
                      <Button>Discover More</Button>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Container>
          </Row>
        </>
      )}
    </>
  );
};

export default About;
