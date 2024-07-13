import { useEffect } from "react";
import data from "../database";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function ProductList() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.productCount);
  const handleAddCart = (product) => {
    // setCount((item) => [++item], count);
    dispatch({ type: `add_item`, payload: { ...product, quantity: 1 } });
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
              <p> {item.name}</p>

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
