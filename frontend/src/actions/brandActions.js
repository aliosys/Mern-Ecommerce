import axios from "axios";
import {
  BRAND_CREATE_REQUEST,
  BRAND_DELETE_REQUEST,
  BRAND_LIST_REQUEST,
  BRAND_UPDATE_REQUEST,
} from "../constants/brandConstants";

export const listBrands = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/brand");

    dispatch({ type: BRAND_LIST_REQUEST, payload: data });
  } catch (error) {
    dispatch({
      type: BRAND_LIST_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBrand = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/brand`, {}, config);

    console.log("create brand", data);

    dispatch({
      type: BRAND_CREATE_REQUEST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_CREATE_REQUEST,
      payload: message,
    });
  }
};

export const updateBrand = (brand) => async (dispatch, getState) => {
  try {
    console.log("Brand", brand);
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/brand/${brand._id}`, brand, config);

    dispatch({
      type: BRAND_UPDATE_REQUEST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BRAND_UPDATE_REQUEST,
      payload: [],
    });
  }
};
