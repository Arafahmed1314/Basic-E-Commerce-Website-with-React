import { useCartContext } from "../context/Context";

const CartReducer = (state, action) => {
    const { cartValue, setCartValue } = useCartContext();
    switch (action.type) {
        case "ADD_TO_CART": {
            return {
                setCartValue: [...cartValue, action.payload]
            }
        }

        case "REMOVE_FROM_CART": {
            return {
                setCartValue: cartValue.filter((item) => item.id !== action.payload)
            }
        }

        default:
            return cartValue;;
    }
}
export { CartReducer }