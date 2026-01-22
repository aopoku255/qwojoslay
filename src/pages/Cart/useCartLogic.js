import { useAddToCartMutation } from "../../app/features/cart/cartApiSlice";

const [addToCart] = useAddToCartMutation();
export function useCartLogic() {
  const handleAddToCart = async (e, data) => {
    const response = await addToCart(data);
    console.log(response);
  };
  return { handleAddToCart };
}
