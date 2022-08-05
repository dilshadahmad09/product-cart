export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove iteams
export const DELETE = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

// remove individual iteam

export const DELETE_ONE = (iteam) => {
  return {
    type: "DELETE_ONE",
    payload: iteam,
  };
};
