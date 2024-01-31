// import { futimes } from "graceful-fs";
import React from "react";
// import recipes from "../recipes";
import Swal from "sweetalert2";
import Specials from "./Specials";

export default function Menu() {
  const handleOrder = (id) => {
    console.log(id, "id is clicked");
    Swal.fire({
      title: "Order this food?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been confirmed!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks special!</h2>
        <button>Order Menu</button>
      </div>
      <div className="cards">
        {Specials.map((Special) => (
          <div key={Special.id} className="menu-items">
            <img src={Special.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{Special.title}</h5>
                <p>{Special.price}</p>
              </div>
              <p>{Special.description}</p>
              <button
                className="orderBtn"
                onClick={() => handleOrder(Special.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
