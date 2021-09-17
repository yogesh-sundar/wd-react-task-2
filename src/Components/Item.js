import React, { } from "react";
import Icons from "./Icons";

function Item(details) {
  
  let { name, price, discountPrice, showCount, disable, index} = details;

  return (
    <div className="card h-100">
      <img
        className="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />

      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">
            <b>{name}</b>
          </h5>
          <h6>
            {name === "Popular Item" ? (
              <Icons />
            ) : name === "Special Item" ? (
              <Icons />
            ) : (
              ""
            )}
          </h6>
          <strike>{discountPrice}</strike>&nbsp;{price}
        </div>
      </div>
      <div className="card-footer p-5 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button
            className="btn btn-outline-dark mt-auto btn-danger"
            id="button"
            disabled = {disable}  
            onClick = {() =>showCount(index)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
