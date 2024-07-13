import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Total() {
  const cardItem = useSelector((state) => state.cart);
  const [total, setTotal] = useState();

  const calculateTotalPrice = () => {
    let total = 0;
    cardItem.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total;
  };
  useEffect(() => {
    const item = calculateTotalPrice();
    setTotal(item);
  }, [cardItem]);
  return <h4>Total: {total}$</h4>;
}

export default Total;
