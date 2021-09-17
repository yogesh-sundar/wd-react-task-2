import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Icons() {
  const [rate, setRate] = useState(0);
  return (
    <div>
      {[1,2,3,4,5].map((item, key) => {
        const rating = key + 1;
        return (
          <label>
            <input
              type="radio"
              value={rating}
              onClick={() => {
                setRate(rating);
              }}
            />

            <FaStar
              color={
                rating < rate || rating === rate
                  ? "rgb(255, 165, 0)"
                  : "rgb(187, 186, 182)"
              }
            />
          </label>
        );
      })}
    </div>
  );
}

export default Icons;
