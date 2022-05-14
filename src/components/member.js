import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Modal from "./modal";

const Member = (props) => {
  let { currentUser, setCurrentUser, Photo } = props;

  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const goModal = (imgSrc) => {
    let tempData = [imgSrc];
    setTempData((item) => [1, ...tempData]);
    return setModal(true);
  };
  const { addItem } = useCart();
  const showAddItem = (title) => {
    window.alert(`一份 { ${title} }  放進購物車`);
  };
  return (
    <div className="member row">
      {!currentUser && <div>Please login first</div>}
      {currentUser && (
        <div className="member_container">
          <h1>This is member page</h1>
          <div className="food_cards ">
            {Photo.photo.map((item, index) => {
              return (
                <div className="card overflow-hidden shadow" key={index}>
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt="picture"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text">$ {item.price}</p>
                    <button
                      onClick={() => {
                        goModal(item.imgSrc);
                      }}
                      href="#"
                      className="btn btn-primary"
                    >
                      See content
                    </button>
                    <button
                      onClick={() => [addItem(item), showAddItem(item.title)]}
                      className="btn btn-primary"
                    >
                      add to List
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {modal === true ? (
            <Modal imgSrc={tempData[1]} hide={() => setModal(false)} />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Member;
