import { useAddToCartMutation } from "../../app/features/cart/cartApiSlice";

export function useCartLogic() {
  const [addToCart] = useAddToCartMutation();
  const handleAddToCart = async (e, data) => {
    const response = await addToCart(data);
    console.log(response);
  };
  return { handleAddToCart };
}
