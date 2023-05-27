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
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
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
