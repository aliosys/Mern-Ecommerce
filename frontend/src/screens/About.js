import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';
import Product from '../components/Product';
import HeroSection from '../components/HeroSection';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import {listProducts} from '../actions/productActions';

const About = () => {
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
                    style={{objectFit: 'cover'}}
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
              <Row className="py-4">
                <Col className="col-3">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 64 64">
                      <path d="M59.94,20.17c-1.06-3.34-2.78-5.29-5.23-5.97-.03-.16-.05-.27-.06-.29-.13-.61-.37-1.18-.71-1.71,.96-1.47,1.21-3.22,.58-4.54-.45-.96-1.31-1.57-2.42-1.75-.89-2.22-3.05-3.06-4.83-2.89-1.72,.17-3.02,1.19-3.48,2.66-.94,.1-1.74,.62-2.27,1.48-.87,1.44-.84,3.64,0,5.27-.93,1.04-1.76,2.22-2.56,3.39-2.42,3.52-4.75,6.83-9.98,6.8-8.72-.08-17.71-.47-23.46-4.07-.32-.2-.73-.2-1.05,0-.32,.2-.51,.56-.47,.94,.02,.2,.37,3.85,2.3,6.53-.38-.05-.65-.11-.75-.15-.35-.23-.8-.22-1.14,.03-.34,.25-.48,.68-.37,1.08,.64,2.27,2.21,4.51,3.86,6.04-.4-.02-.7-.06-.84-.11-.45-.17-.95,0-1.2,.4-.25,.4-.19,.93,.16,1.26,1.64,1.54,2.9,3.08,4.11,4.56,2.71,3.31,5.15,6.28,10.63,7.97l2.67,5.93c.34,.73,1.05,1.17,1.81,1.17,.18,0,.37-.03,.56-.08l.06-.02,.73,3.76-1.63,1.37c-.42,.35-.48,.98-.12,1.41,.2,.24,.48,.36,.77,.36,.23,0,.45-.08,.64-.23l1.78-1.49,3.58,.22s.04,0,.06,0c.52,0,.96-.41,1-.94,.03-.55-.39-1.03-.94-1.06l-3.2-.2-.73-3.75,.09-.03c.75-.22,1.31-.86,1.43-1.65l.46-3.38c.81,.03,1.6,.05,2.36,.04,.26,.62,.68,1.55,1.34,3.02,.33,.73,1.06,1.18,1.83,1.18,.18,0,.36-.02,.54-.07l.07-.02,.73,3.76-1.63,1.36c-.42,.35-.48,.99-.12,1.41,.2,.24,.48,.36,.77,.36,.23,0,.45-.08,.64-.23l1.78-1.49,3.58,.22s.04,0,.06,0c.52,0,.96-.41,1-.94,.03-.55-.39-1.03-.94-1.06l-3.2-.2-.73-3.75,.08-.02c.76-.22,1.33-.87,1.44-1.65l.39-2.89c4.8-1.34,8.07-3.96,9.72-7.8,7.14-5.88,6.07-15,4.63-19.47,1.4,.09,3.16,.37,4.39,1.08,.16,.09,.33,.14,.5,.14,.22,0,.44-.07,.63-.22,.32-.26,.45-.69,.33-1.08Zm-16.69-11.97c.27-.45,.65-.61,1.21-.51,.28,.05,.57-.02,.8-.2,.22-.18,.36-.45,.38-.73,.06-1.15,.99-1.65,1.84-1.74,1.17-.11,2.52,.49,2.92,2.09,.11,.45,.52,.78,.99,.76,1-.03,1.25,.49,1.33,.65,.23,.49,.2,1.32-.2,2.15-.41-.31-.87-.59-1.37-.81-2.25-1-4.88-.85-7.03,.39-.37,.21-.71,.46-1.04,.72-.3-.94-.26-2.06,.16-2.76ZM23.24,47.73c1.35,.28,2.84,.5,4.53,.64l-.44,3.23-2.09,.59-2.01-4.47Zm24.79-9.41c-.13,.11-.24,.25-.3,.4-1.28,3.14-3.86,5.36-7.67,6.61l.13-.94c.07-.55-.31-1.05-.86-1.13-.54-.07-1.05,.31-1.13,.86l-.82,6.01-2.08,.59s-1.54-3.43-1.62-3.61c-.02-.05-.05-.1-.08-.14-.19-.3-.54-.47-.88-.46-1.46,.05-2.96,.01-4.6-.12-10.12-.82-12.91-4.23-16.44-8.54-.75-.92-1.52-1.86-2.39-2.81,.85,0,1.64-.04,2.03-.06,.5-.03,.9-.42,.94-.91,.04-.5-.28-.95-.77-1.06-1.11-.26-3.54-2.37-4.87-4.94,.7,.09,1.55,.18,2.55,.25,.48,.03,.91-.27,1.03-.73,.13-.46-.09-.94-.52-1.16-1.92-.96-2.87-3.4-3.32-5.15,6.11,2.91,14.48,3.26,22.6,3.33,.05,0,.09,0,.14,0,6.23,0,9.03-4.07,11.51-7.66,1.39-2.02,2.71-3.94,4.5-4.97,1.6-.93,3.55-1.04,5.21-.3,1.26,.56,2.12,1.53,2.36,2.67,0,.03,.59,2.62-.81,4.22-.26,.29-.32,.71-.16,1.06,1.43,3.23,3.56,12.89-3.71,18.69Zm6.34-20.05c.26-.66,.38-1.32,.44-1.93,.96,.43,1.74,1.21,2.37,2.36-.93-.24-1.9-.37-2.81-.43Z"></path>
                      <circle cx="47.5" cy="15.17" r="2"></circle>
                      <path d="M40.88,25.93c-.52,.19-.78,.77-.59,1.28,.54,1.47,.65,4-.86,6.28-1.64,2.48-4.74,3.91-8.95,4.12-2.61,.13-4.97-.45-6.38-.99,1-.5,1.59-.94,1.62-.97,.29-.22,.44-.59,.39-.95-.06-.36-.31-.67-.66-.79-1.07-.37-3.5-1.43-4.92-2.78,2.82,.15,7.28,.25,10.24-1.38,.48-.27,.66-.87,.39-1.36-.27-.48-.87-.66-1.36-.39-2.75,1.51-7.6,1.23-9.93,1.09-.55-.03-1-.06-1.29-.06-.32,0-.62,.15-.81,.42-.19,.26-.24,.6-.14,.9,.72,2.16,3.34,3.75,5.22,4.65-.37,.17-.79,.34-1.25,.5-.29,.1-.52,.32-.62,.61-.1,.29-.07,.6,.09,.86,.79,1.28,4.71,2.67,8.69,2.67,.27,0,.55,0,.82-.02,6.16-.31,9.13-2.9,10.52-5.01,1.92-2.9,1.77-6.17,1.07-8.08-.19-.52-.77-.78-1.28-.59Z"></path>
                    </svg>
                  </span>
                  <h3>poultry</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus
                  </p>
                </Col>
                <Col className="col-3">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 64 64">
                      <path d="M60,3h-4c-.55,0-1,.45-1,1V13h-2.01c0-.1,0-.2,0-.31,0-5.35-2.64-9.54-6-9.54-2.11,0-3.93,1.65-5,4.2-1.07-2.55-2.89-4.2-5-4.2s-3.93,1.65-5,4.2c-1.07-2.55-2.89-4.2-5-4.2s-3.93,1.65-5,4.2c-1.07-2.55-2.89-4.2-5-4.2-3.36,0-6,4.19-6,9.54,0,.11,0,.21,0,.31h-2.01V4c0-.55-.45-1-1-1H4c-.55,0-1,.45-1,1V60c0,.55,.45,1,1,1h4c.55,0,1-.45,1-1v-5H55v5c0,.55,.45,1,1,1h4c.55,0,1-.45,1-1V4c0-.55-.45-1-1-1Zm-3,2h2V13h-2V5Zm2,12H5v-2H59v2Zm0,28H5v-2H59v2Zm0,8H5v-6H59v6Zm-4-26v14h-2.01c0-.1,0-.2,0-.31,0-5.35-2.64-9.54-6-9.54-2.11,0-3.93,1.65-5,4.2-1.07-2.55-2.89-4.2-5-4.2s-3.93,1.65-5,4.2c-1.07-2.55-2.89-4.2-5-4.2s-3.93,1.65-5,4.2c-1.07-2.55-2.89-4.2-5-4.2-3.36,0-6,4.19-6,9.54,0,.11,0,.21,0,.31h-2.01v-14H55Zm-11.99,14c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54s4,3.45,4,7.54c0,.11,0,.21,0,.31h-7.98Zm-30,0c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54s4,3.45,4,7.54c0,.11,0,.21,0,.31h-7.98Zm10,0c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54s4,3.45,4,7.54c0,.11,0,.21,0,.31h-7.98Zm10,0c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54s4,3.45,4,7.54c0,.11,0,.21,0,.31h-7.98Zm-26.01,0h-2v-14h2v14Zm50,0v-14h2v14h-2Zm2-16H5v-6H59v6ZM47,5.15c2.17,0,4,3.45,4,7.54,0,.11,0,.21,0,.31h-7.98c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54Zm-10,0c2.17,0,4,3.45,4,7.54,0,.11,0,.21,0,.31h-7.98c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54Zm-10,0c2.17,0,4,3.45,4,7.54,0,.11,0,.21,0,.31h-7.98c0-.1,0-.2,0-.31,0-4.09,1.83-7.54,4-7.54Zm-14,7.54c0-4.09,1.83-7.54,4-7.54s4,3.45,4,7.54c0,.11,0,.21,0,.31h-7.98c0-.1,0-.2,0-.31ZM7,5V13h-2V5h2Zm0,54h-2v-4h2v4Zm50,0v-4h2v4h-2Z"></path>
                    </svg>
                  </span>
                  <h3>Poultry Equipments</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus
                  </p>
                </Col>
                <Col className="col-3">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 64 64">
                      <path d="M60.34,46h-2.55c.6-2.67,.2-5.36-1.19-7.7-1.96-3.32-5.68-5.66-10.21-6.41-1.9-.32-3.37-.8-4.64-1.37,.12-2.11-.5-4.18-1.79-5.91-1.46-1.96-3.61-3.22-6.05-3.55-1.56-.21-2.88-.94-3.72-2.07l-.09-.12c-.71-.94-1.91-1.3-2.99-1l-1.82-2.43c.41-.47,.67-1.04,.77-1.67,.13-.87-.09-1.73-.62-2.43-.52-.7-1.29-1.16-2.16-1.29-.87-.12-1.73,.09-2.44,.62-.62,.47-1.04,1.12-1.21,1.85-.75-.04-1.5,.18-2.12,.65-1.45,1.08-1.75,3.13-.66,4.59,.93,1.25,2.6,1.64,3.98,1.02l1.81,2.43c-.45,.72-.55,1.61-.27,2.4-.16,.02-.33,.03-.49,.05-.08,0-.15,0-.23,0-1.6,.03-2.98-.52-3.98-1.51l-.11-.11c-.84-.84-2.08-1.02-3.1-.57l-2.14-2.14c.34-.52,.52-1.13,.52-1.77,0-.88-.34-1.7-.96-2.32-1.24-1.24-3.4-1.24-4.63,0-.55,.55-.87,1.26-.94,2.01-.74,.07-1.46,.4-2.01,.94-1.28,1.28-1.28,3.36,0,4.63,1.11,1.1,2.81,1.25,4.08,.44l2.14,2.15c-.16,.35-.24,.73-.24,1.13,0,.75,.29,1.45,.82,1.97l.09,.09c.09,.09,.16,.2,.25,.3-1.88,1.88-3.4,4.13-4.47,6.75-1.55,3.78-.81,7.54,.34,10.38h-2.97c-.55,0-1,.45-1,1v2c0,2.76,2.24,5,5,5H56.34c2.76,0,5-2.24,5-5v-2c0-.55-.45-1-1-1ZM21.17,16.41c-.27-.03-.55,.06-.76,.24l-.16,.15c-.57,.42-1.37,.31-1.79-.25-.42-.57-.31-1.37,.26-1.79,.41-.31,.96-.34,1.39-.09,.35,.2,.77,.17,1.1-.06,.32-.24,.47-.64,.38-1.03-.12-.5,.07-1.02,.47-1.32,.27-.2,.61-.29,.95-.24,.34,.05,.64,.23,.84,.51,.2,.27,.29,.61,.24,.94-.05,.34-.22,.63-.5,.84-.04,.03-.09,.05-.15,.08-.25,.14-.43,.38-.49,.66-.06,.28,0,.58,.18,.81l2.27,3.04-1.27,.94-2.26-3.04c-.17-.22-.42-.37-.7-.4Zm3.29,6.86l-.09-.13c-.13-.17-.18-.38-.15-.58,.03-.21,.14-.39,.3-.52l2.87-2.14c.35-.26,.85-.19,1.11,.16l.09,.11c1.16,1.56,2.96,2.58,5.06,2.85,1.9,.26,3.57,1.24,4.71,2.77,.81,1.08,1.28,2.34,1.38,3.65-.68-.41-1.33-.85-1.99-1.29-2.42-1.64-4.93-3.34-9.75-4.32-1.13-.22-2.26-.34-3.39-.35-.05-.07-.1-.15-.15-.22Zm-8.86-.08c.2,0,.4,.08,.56,.23l.11,.11c1.38,1.38,3.3,2.12,5.42,2.1,1.9-.01,3.72,.71,5.07,2.06,1.36,1.36,2.09,3.17,2.06,5.09-.03,1.92-.82,3.71-2.22,5.03-2.76,2.6-7.17,2.52-9.84-.17-1.38-1.39-2.1-3.23-2.04-5.19,.06-1.96-.71-3.89-2.12-5.3l-.09-.09c-.15-.15-.23-.35-.23-.56s.08-.41,.23-.56l2.53-2.53c.15-.15,.36-.23,.56-.23Zm-7.21-2.33c-.28,0-.54,.13-.72,.34-.05,.05-.09,.1-.15,.18-.5,.5-1.31,.5-1.81,0-.5-.5-.5-1.31,0-1.81,.36-.36,.9-.47,1.37-.29,.37,.15,.79,.06,1.07-.22,.28-.28,.37-.7,.22-1.07-.19-.47-.07-1.01,.29-1.37,.48-.48,1.32-.48,1.81,0,.24,.24,.38,.56,.38,.9s-.13,.66-.42,.94l-.13,.11c-.21,.18-.33,.44-.34,.72-.01,.28,.1,.55,.29,.74l2.68,2.68-1.12,1.12-2.67-2.68c-.2-.2-.49-.3-.74-.29Zm.43,15.52c.89-2.18,2.12-4.08,3.64-5.69,.18,.55,.29,1.13,.27,1.71-.08,2.51,.85,4.88,2.62,6.66,1.75,1.76,4.09,2.65,6.43,2.65s4.47-.81,6.2-2.43c1.8-1.7,2.81-3.99,2.85-6.46,.04-2.47-.9-4.79-2.65-6.54h0c-.16-.17-.34-.32-.52-.47,4.4,.9,6.74,2.48,8.99,4,2.37,1.61,4.82,3.27,9.43,4.04,3.94,.66,7.15,2.65,8.82,5.46,1.21,2.05,1.5,4.35,.85,6.68H9.48c-1.16-2.54-2.1-6.11-.67-9.62Zm50.52,12.62c0,1.65-1.35,3-3,3H8.34c-1.65,0-3-1.35-3-3v-1H59.34v1Z"></path>
                    </svg>
                  </span>
                  <h3>Fresh Chicken</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus
                  </p>
                </Col>
                <Col className="col-3">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 64 64">
                      <path d="M54.63,24.27c.97-3.28,.23-4.64-.55-5.2-.49-.35-1.56-.76-3.18,.39-1.71,1.22-3.02,2.09-4.17,2.85-.86-8.36-6.05-13.8-11.06-15.63,.1-.38,.21-.69,.31-.91,.27-.64,.19-1.37-.22-1.94-.4-.56-1.05-.88-1.72-.84-2.69,.15-4.94,1.6-5.99,3.8-4.96,1.95-9.93,7.37-10.77,15.52-1.16-.76-2.46-1.64-4.17-2.85-1.62-1.16-2.69-.74-3.18-.39-.78,.56-1.52,1.91-.55,5.2,1.03,3.51,1.94,5.84,6.47,7.31-.49,.91-.9,1.92-1.21,2.98l-2.3-1.17c-.3-.15-.65-.15-.94,.02-.29,.16-.48,.46-.51,.79-.07,.92-.11,1.82-.11,2.68,0,13.75,9.12,24.11,21.22,24.11s21.22-10.37,21.22-24.11c0-.86-.04-1.76-.11-2.68-.03-.33-.22-.63-.51-.79-.29-.16-.65-.17-.94-.02l-2.3,1.17c-.31-1.07-.72-2.08-1.21-2.98,4.53-1.47,5.44-3.8,6.47-7.31Zm-3.4,12.62c0,12.81-8.08,22.11-19.22,22.11s-19.22-9.3-19.22-22.11c0-.33,0-.67,.02-1.01l3.74,1.9c.36,.18,.79,.13,1.1-.13l3.89-3.29,4.17,3.01c.37,.27,.88,.25,1.23-.05l5.08-4.29,5.08,4.29c.35,.3,.86,.32,1.23,.05l4.17-3.01,3.89,3.29c.31,.26,.74,.31,1.1,.13l3.74-1.9c.01,.34,.02,.68,.02,1.01Zm-4.07-1.19l-3.98-3.37c-.35-.3-.86-.32-1.23-.05l-4.17,3.01-5.12-4.33c-.37-.32-.92-.32-1.29,0l-5.12,4.33-4.17-3.01c-.37-.27-.88-.25-1.23,.05l-3.98,3.37-.39-.2c.38-1.44,.94-2.75,1.67-3.83,.1-.11,.18-.24,.22-.39,.15-.51-.13-1.06-.63-1.24-.05-.02-.09-.03-.14-.04-4.59-1.18-5.25-2.79-6.28-6.29-.62-2.1-.32-2.9-.22-2.99,.06-.02,.36,.02,.87,.38,2,1.42,3.47,2.39,4.77,3.25,1.39,.92,2.49,1.64,3.76,2.6,.44,.33,1.07,.25,1.4-.19,.33-.44,.25-1.07-.19-1.4-.86-.65-1.66-1.21-2.49-1.77,.43-8.11,5.25-13.39,9.94-15.05,.27-.1,.49-.31,.6-.58,.66-1.7,2.36-2.84,4.41-2.96-.3,.69-.9,2.08-.54,4.58,.07,.48,.51,.81,.98,.81,.06,0,.13,0,.19-.02,.54-.1,.9-.63,.79-1.17-.03-.14-.04-.27-.06-.41,4.45,1.87,8.89,7,9.31,14.8-.83,.56-1.63,1.11-2.49,1.77-.44,.33-.52,.96-.19,1.4,.33,.44,.96,.52,1.4,.19,1.27-.96,2.37-1.69,3.76-2.6,1.3-.85,2.77-1.82,4.77-3.25,.52-.37,.81-.39,.86-.39,.11,.1,.41,.9-.21,3-1.04,3.52-1.69,5.13-6.34,6.31-.03,0-.06,.02-.1,.03-.5,.18-.78,.72-.63,1.23,.05,.16,.14,.31,.25,.42,.71,1.07,1.27,2.38,1.65,3.8l-.39,.2Z"></path>
                      <path d="M32.71,20.29c-.39-.39-1.02-.39-1.41,0l-2.4,2.4c-.34,.34-.39,.87-.12,1.26l2.4,3.6c.19,.28,.5,.45,.83,.45s.65-.17,.83-.45l2.4-3.6c.26-.4,.21-.92-.12-1.26l-2.4-2.4Zm-.71,4.9l-1.11-1.67,1.11-1.11,1.11,1.11-1.11,1.67Z"></path>
                      <circle cx="26.58" cy="17.25" r="2"></circle>
                      <circle cx="37.42" cy="17.25" r="2"></circle>
                    </svg>
                  </span>
                  <h3>Chicks</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default About;
