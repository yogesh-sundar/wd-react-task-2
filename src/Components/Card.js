import React from "react";
import Item from "./Item";

function Card({ showCount, detail}) {
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {detail.map((item, index) => {
            return (
              <>
                <div className="col-4 mb-3" key={index}>
                  <Item
                    name = {item.name}
                    price = {item.price}
                    discountPrice = {item.actualPrice}
                    disable = { item.disable }
                    showCount = {showCount}
                    index = {index}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;
