import axios from "axios";
import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_LIST_REQUEST,
} from "../constants/categoryConstants";

export const listCategory = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/category");

    dispatch({ type: CATEGORY_LIST_REQUEST, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCategory = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/category`, {}, config);

    console.log("create category", data);

    dispatch({
      type: CATEGORY_CREATE_REQUEST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: CATEGORY_CREATE_REQUEST,
      payload: message,
    });
  }
};

export const updateCategory = (category) => async (dispatch, getState) => {
  try {
    console.log("Category", category);
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/category/${category._id}`,
      category,
      config
    );

    dispatch({
      type: CATEGORY_UPDATE_REQUEST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: CATEGORY_UPDATE_REQUEST,
      payload: [],
    });
  }
};
