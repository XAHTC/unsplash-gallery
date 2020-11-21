const API_KEY = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"


export function fetchItems() {

  return async dispatch => {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=30`);
    const json = await response.json()
    dispatch({
      type: "FETCH_ITEMS",
      payload: json,
    })
  }
}
