import React from "react";
import Swal from "sweetalert2";
import Specials from "./Specials";

export default function Menu() {
  const handleOrder = (id) => {
    console.log(id, "id is clicked");
    Swal.fire({
      title: "Order now?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ordered!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Orders not completed!", "", "info");
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks special!</h2>
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
