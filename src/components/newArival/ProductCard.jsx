import { useState } from "react";
import { useCartContext } from "../context/Context";
import CartIcon from "../svgIcon/CartIcon";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { cartValue, setCartValue } = useCartContext();
  const [togglebtn, setToggleBtn] = useState(true);
  const handleAddRemoveCart = () => {
    if (togglebtn) {
      setCartValue([...cartValue, product]);
    } else {
      const updatedCart = cartValue.filter((item) => item.id !== product.id);
      setCartValue(updatedCart);
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
      {/* <!-- Button --> */}
      <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1 w-full">
        <div
          className="flex space-x-2 px-3 py-2 justify-center"
          onClick={handleAddRemoveCart}
        >
          <div>
            <CartIcon />
          </div>
          <p
            className={`px-4 py-2 rounded-md font-semibold text-center
  ${togglebtn || "bg-red-500 text-white"}`}
          >
            {togglebtn ? "Add To Cart" : "Remove From Cart"}
          </p>
        </div>
      </div>
    </div>
  );
}
