import React from "react";
import StarRating from "react-native-star-rating";

const Rating = () => (
  <StarRating
    containerStyle={{ justifyContent: "flex-start" }}
    disabled
    maxStars={5}
    rating={2.5}
    starSize={20}
    fullStarColor="#f1c40f"
    emptyStarColor="#f1c40f"
    halfStarColor="#f1c40f"
  />
);

export default Rating;
