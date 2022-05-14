import React from "react";
import { useCart } from "react-use-cart";

const MyList = (props) => {
  let { currentUser, setCurrentUser } = props;
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <div className="myList">
      {!currentUser && <div>Please login first</div>}
      {currentUser && (
        <div className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12">
              <table className="table table-light table-hover m-0">
                <tbody>
                  {items.map((item, index) => {
                    //將data物件中的數據引入
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.imgSrc}
                            style={{ height: "6rem" }}
                            alt=""
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove Item
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h5>
              Cart ({totalUniqueItems}) total Items: ({totalItems})
            </h5>
            <div className="col-auto ms-auto">
              <h2>Total Price: $ {cartTotal}</h2>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-danger m-2"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>
              <button className="btn btn-primary m-2">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
