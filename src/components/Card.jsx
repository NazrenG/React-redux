import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Total from "./Total";
import { remove_item, update_item } from "../redux/reducer";

function Card() {
  const dispatch = useDispatch();
  const cardItem = useSelector((state) => state.basket.cart); // Correct state selection

  const handleRemoveItem = (id) => {
    const product = cardItem.find((element) => element.id === id);
    if (product) {
      if (product.quantity > 1) {
        dispatch(
          update_item({ id: product.id, quantity: product.quantity - 1 })
        );
      } else {
        dispatch(remove_item({ id: product.id }));
      }
    }
  };

  return (
    <div>
      <header className="header">
        <h2>Basket</h2>
        <NavLink to="/">
          <button className="basket-button">Back</button>
        </NavLink>
      </header>
      <ul>
        {cardItem.map((item) => (
          <li key={item.id}>
            <div className="div">
              {item.name} - ${item.price} x {item.quantity}
              <button
                className="basket-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Total />
    </div>
  );
}

export default Card;
