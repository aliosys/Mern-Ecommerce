import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Table, Button, Row, Col, Container} from 'react-bootstrap';
import Blog from '../components/Blog';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import {listBlogs, deleteBlog, createBlog} from '../actions/blogActions';

const BlogListScreen = () => {
  const params = useParams();

  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const {loading, error, blogs, page, pages} = blogList;

  useEffect(() => {
    dispatch(listBlogs(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteBlog(id));
    }
  };
  const createBlogHandler = () => {
    dispatch(createBlog());
  };

  return (
    <>
      <Meta />

      <Container className="mt-4 pt-4">
        <Link to="/" className="btn btn-dark">
          Go Back
        </Link>
        <Row>
          <Col xs={6}>
            <h1>Blogs</h1>
          </Col>
          <Col xs={6}>
            <Row className="align-items-center">
              <Col className="text-right">
                <Button className="my-3" onClick={createBlogHandler}>
                  <i className="fas fa-plus"></i> Create Blog
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>IMAGE</th>
                  <th>CONTENT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog._id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.image}</td>
                    <td>{blog.content.slice?.(0, 50)}</td>
                    <td>
                      <Link to={`/admin/blog/${blog._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(blog._id)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} isAdmin={true} />
          </Container>
        </>
      )}
    </>
  );
};

export default BlogListScreen;
