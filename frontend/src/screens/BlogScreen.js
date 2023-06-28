import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import {listBlogDetails, createBlogReview} from '../actions/blogActions';
import {BLOG_CREATE_REVIEW_RESET} from '../constants/blogConstants';

const BlogScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const {loading, error, blog} = blogDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const blogReviewCreate = useSelector((state) => state.blogReviewCreate);
  const {
    success: successBlogReview,
    loading: loadingBlogReview,
    error: errorBlogReview,
  } = blogReviewCreate;

  useEffect(() => {
    if (successBlogReview) {
      setRating(0);
      setComment('');
    }
    if (!blog._id || blog._id !== params.id) {
      dispatch(listBlogDetails(params.id));
      dispatch({type: BLOG_CREATE_REVIEW_RESET});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, successBlogReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createBlogReview(params.id, {
        rating,
        comment,
      }),
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Link className="btn btn-light my-3" to="/">
            <Button className="mt-4">Go Back</Button>
          </Link>
        </Row>
      </Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={blog.name} />
          <Container>
            <Row>
              <Col md={12}>
                <Image src={blog.image} alt={blog.name} fluid />
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{blog.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>{blog.content}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default BlogScreen;
