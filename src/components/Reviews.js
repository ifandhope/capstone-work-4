import React from "react";
import Testimonials from "./Testimonials";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Customer Reviews</h2>
      </div>
      <div className="review-cards">
        {Testimonials.map((testimonial) => (
          <div key={testimonial.id} className="review-customer">
            <img
              src={testimonial.image}
              alt=""
              style={{
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
              }}
            />
            <div className="review-content">
              <div className="heading">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.location}</p>
              </div>
              <p>{testimonial.text}</p>
            </div>
            <div className="review-rating">
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
