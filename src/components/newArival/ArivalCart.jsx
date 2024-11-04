import { useCartContext } from "../context/Context";
import CartIcon from "../svgIcon/CartIcon";

export default function ArivalCart() {
  const { cartValue } = useCartContext();
  console.log(cartValue);

  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <CartIcon />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartValue.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
