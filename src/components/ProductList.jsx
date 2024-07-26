import { useEffect } from "react";
import data from "../database";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { add_item } from "../redux/reducer";

function ProductList() {
  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.basket.productCount); // Correct state selection

  const handleAddCart = (product) => {
    if (product) {
      dispatch(
        add_item({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        })
      );
    }
  };

  useEffect(() => {}, [productCount]);

  return (
    <div>
      <header className="header">
        <h2>Product List</h2>
        <NavLink to="/product">
          <button className="basket-button">
            Basket<div className="count_div">{productCount}</div>
          </button>
        </NavLink>
      </header>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="div">
              <p>{item.name}</p>
              <button
                className="basket-button"
                onClick={() => handleAddCart(item)}
              >
                add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
