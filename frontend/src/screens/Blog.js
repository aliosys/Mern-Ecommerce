import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import BlogComponent from '../components/Blog';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import {listBlogs} from '../actions/blogActions';
import HeroSection from '../components/HeroSection';

const Blog = () => {
  const params = useParams();

  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const {loading, error, blogs, page, pages} = blogList;

  useEffect(() => {
    dispatch(listBlogs(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        // <ProductCarousel />
        <>{null}</>
      ) : (
        <Container>
          <Row>
            <Link to="/" className="btn btn-light">
              Go Back
            </Link>
          </Row>
        </Container>
      )}

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
                  heroTitle="Our Blogs"
                  heroContent="  Welcome to our Munna Poultry Farm, established in 1992 and
                    officially registered in 2006. With over three decades of
                    experience in the industry, we have built a strong
                    foundation and garnered a reputation for providing
                    high-quality poultry products to our valued customers."
                />
              </div>
            </Row>
          </section>

          <Container>
            <h1>Latest Blogs</h1>
            <Row>
              {blogs.map((blog) => (
                <Col key={blog._id} sm={12} md={6} lg={6} xl={6}>
                  <BlogComponent blog={blog} />
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

export default Blog;
