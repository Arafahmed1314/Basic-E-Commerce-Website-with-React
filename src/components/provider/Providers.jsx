/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { CartContext, ProductContext, SearchContext } from "../context/Context";
import useArrivalProduct from "../hook/useArrivalProduct";
import { FilterCategoryContext } from "../context/FilterCategoryContext";
import { CartReducer, initialState } from "../reducer/Reducer";

const Providers = ({ children }) => {
  const [sortOption, setSortOption] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [checkValue, setCheckValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { arrivalData, loading } = useArrivalProduct(categoryValue);
  const [cartValue, dispatch] = useReducer(CartReducer, initialState);
  return (
    <ProductContext.Provider
      value={{ arrivalData, loading, sortOption, setSortOption }}
    >
      <FilterCategoryContext.Provider
        value={{ categoryValue, setCategoryValue, checkValue, setCheckValue }}
      >
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <CartContext.Provider value={{ cartValue, dispatch }}>
            {children}
          </CartContext.Provider>
        </SearchContext.Provider>
      </FilterCategoryContext.Provider>
    </ProductContext.Provider>
  );
};

export default Providers;
