import { useState } from "react";

export function useCartCardDrawer() {
  const [orders, setOrders] = useState(1);
  const [amount] = useState(210);

  const handleOrderIncrement = () => {
    setOrders((prev) => prev + 1);
  };

  const handleOrderDecrease = () => {
    setOrders((prev) => Math.max(1, prev - 1));
  };

  const totalAmount = orders * amount;

  return {
    orders,
    handleOrderIncrement,
    handleOrderDecrease,
    amount,
    totalAmount,
  };
}
