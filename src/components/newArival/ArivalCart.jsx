import { useState } from "react";
import { useCartContext } from "../context/Context";
import CartIcon from "../svgIcon/CartIcon";
import CartModal from "./CartModal";

export default function ArivalCart() {
  const { cartValue } = useCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClose = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flow-root">
      <button
        onClick={handleModalOpenClose}
        className="group -m-2 flex items-center p-2"
      >
        <CartIcon />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartValue.cartItems.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </button>
      {/* this feature is  made for just learning . if you want to export comment out this portion  */}

      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleModalOpenClose}
          ></div>
          <CartModal
            cartData={cartValue.cartItems}
            handleModalClose={handleModalOpenClose}
          />
        </div>
      )} */}
    </div>
  );
}
