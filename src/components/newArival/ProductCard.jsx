import { useState } from "react";
import { useCartContext } from "../context/Context";
import CartIcon from "../svgIcon/CartIcon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { dispatch } = useCartContext();
  const [togglebtn, setToggleBtn] = useState(true);

  const handleAddRemoveCart = () => {
    if (togglebtn) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success(`${product.category} item added to cart!`);
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
      toast.error(`One ${product.category} item removed from cart!`);
    }
    setToggleBtn(!togglebtn);
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <button
        className={`cursor-pointer rounded-md text-[0.8125rem] font-medium leading-5 items-center text-center mb-3 mx-3 flex w-full ${
          togglebtn
            ? "bg-white text-slate-700 ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900"
            : "bg-red-500 text-white"
        }`}
        onClick={handleAddRemoveCart}
      >
        <div className="flex items-center justify-center space-x-2 px-3 py-2 w-full">
          <CartIcon />
          <p className="px-4 py-2 rounded-md font-semibold text-center">
            {togglebtn ? "Add To Cart" : "Remove From Cart"}
          </p>
        </div>
      </button>
    </div>
  );
}
