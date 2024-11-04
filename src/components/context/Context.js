import { createContext, useContext } from "react";

const ProductContext = createContext();
const SearchContext = createContext();
const CartContext = createContext();

const useCartContext = () => {
    return useContext(CartContext);
}

const useSearchContext = () => {
    return useContext(SearchContext);
}
const useProductContext = () => {
    return useContext(ProductContext);
}
export { ProductContext, useProductContext, useSearchContext, SearchContext, CartContext, useCartContext }