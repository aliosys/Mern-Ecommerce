import {
  BRAND_CREATE_REQUEST,
  BRAND_DELETE_REQUEST,
  BRAND_LIST_REQUEST,
  BRAND_UPDATE_REQUEST,
} from "../constants/brandConstants";

export const brandListReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case BRAND_LIST_REQUEST:
      return {
        brands: action.payload,
      };
    default:
      return state;
  }
};

export const brandCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_CREATE_REQUEST:
      return { brand: action.payload };
    default:
      return state;
  }
};
