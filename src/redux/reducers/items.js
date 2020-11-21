const initialState = {
  items: [],
}

const items = (state = initialState, action) => {
  if (action.type === "FETCH_ITEMS") {
    return {
      ...state,
      items: action.payload,
    }
  }

  return state;
};


export default items;