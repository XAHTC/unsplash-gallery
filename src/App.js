import { useEffect, useState } from "react";
import Modal from "./components/Modal";

import "./style.css";

function App() {
  const [item, setItem] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
    )
      .then((res) => res.json())
      .then((result) => setItem(result));
  }, []);

  return (
    <div className="app">
      {item.map((item, index) => (
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
