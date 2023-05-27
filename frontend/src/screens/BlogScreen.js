import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap';
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
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={blog.name} />
          <Row>
            <Col md={6}>
              <Image src={blog.image} alt={blog.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{blog.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={blog.rating}
                    text={`${blog.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${blog.price}</ListGroup.Item>
                <ListGroup.Item>Description: {blog.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>INR{blog.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {blog.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {blog.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {blog.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successBlogReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingBlogReview && <Loader />}
                  {errorBlogReview && (
                    <Message variant="danger">{errorBlogReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}>
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) =>
                            setComment(e.target.value)
                          }></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingBlogReview}
                        type="submit"
                        variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BlogScreen;
