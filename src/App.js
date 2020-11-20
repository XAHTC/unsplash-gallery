import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

import { setItems } from "./redux/actions/items";

import "./style.css";

function App() {
  const dispatch = useDispatch();
  
  const items = useSelector(({items}) => items.items)

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(setItems(result));
      });
  }, []);


  return (
    <div className="app">
      {items.map((item, index) => (
        <div
          className="image-container"
          key={item.id}
          id={index}
          onClick={() => setSelectedItem(item)}
        >
          <img className="image" src={item.urls.regular} alt="logo" />
          <div className="info">
            <img
              className="avatar"
              src={item.user.profile_image.small}
              alt="avatar"
            />
            <div className="text">
              <p className="name">{item.user.username}</p>
              <p className="name">{item.alt_description}</p>
            </div>
          </div>
        </div>
      ))}
      {selectedItem && (
        <Modal
          active={true}
          onClose={() => setSelectedItem(null)}
          url={selectedItem.urls.regular}
        />
      )}
    </div>
  );
}
export default App;
