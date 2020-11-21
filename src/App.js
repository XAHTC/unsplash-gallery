import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

import { fetchItems } from "./redux/actions/items";

import "./style.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const items = useSelector(({ items }) => items.items);

  const [selectedItem, setSelectedItem] = useState(null);

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
