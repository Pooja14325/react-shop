import React, { useContext } from "react";
import { ProductContext } from "../store/ProductStore";
import Message from "../components/Message";

const Carts = () => {
  const { carts, removeCartHandler, increament, decreament } =
    useContext(ProductContext);
  return (
    <div className="container-xxl custom-container p-5 mt-5 carts-page">
      <h2>Your Carts 🛒</h2>
      {carts.length === 0 ? (
        <Message />
      ) : (
        <div className="carts p-3 w-75 mx-auto bg-danger rounded-3 add-to-cards pb-1">
          <table className="table table-danger">
            <thead>
              <tr>
                <th scope="col">Sr</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, index) => (
                <tr key={item.id}>
                  <td data-label="Sr" scope="row">{index + 1}</td>
                  <td data-label="Product">{item.title}</td>
                  <td data-label="Price">${item.price}</td>
                  <td  data-label="Quantity" className="d-flex justify-content-between align-items-center qty-cell">
                    <button
                      onClick={() => decreament(item.id)}
                      className="btn btn-warning btn-sm"
                    >
                      -
                    </button>
                    <span className="mt-1">{item.quantity}</span>
                    <button
                      onClick={() => increament(item.id)}
                      className="btn btn-success btn-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeCartHandler(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Carts;
