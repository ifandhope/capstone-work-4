import React from "react";
import star from "../images/star.png";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={star}
      style={{
        width: "1rem",
        height: "1rem",
        marginRight: "2px",
        filter: index < rating ? "brightness(100%)" : "brightness(50%)",
      }}
      alt={`Star ${index + 1}`}
    />
  ));

  return <span>{stars}</span>;
};

export default StarRating;
