/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {listBlogDetails, updateBlog} from '../actions/blogActions';
import {BLOG_UPDATE_RESET} from '../constants/blogConstants';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const BlogEditScreen = ({history}) => {
  const params = useParams();
  const blogId = params.id;

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogDetails = useSelector((state) => state.blogDetails);
  const {loading, error, blog} = blogDetails;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({type: BLOG_UPDATE_RESET});
      navigate('/admin/bloglist');
    } else {
      if (!blog.title || blog._id !== blogId) {
        dispatch(listBlogDetails(blogId));
      } else {
        setTitle(blog.title);
        setImage(blog.image);
        setContent(blog.content);
      }
    }
  }, [dispatch, history, blogId, blog, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const {data} = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('content', content);
    dispatch(
      updateBlog({
        _id: blogId,
        title,
        image,
        content,
      }),
    );
  };

  return (
    <>
      <Link to="/admin/bloglist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Blog Content</Form.Label>
              <ReactQuill
                name="content"
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default BlogEditScreen;
