import * as actionTypes from "./actionTypes";

export const saveResult = (value) => {
  // const updatedResult = value * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: value,
  };
};

export const storeResult = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = (value) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: value,
  };
};
