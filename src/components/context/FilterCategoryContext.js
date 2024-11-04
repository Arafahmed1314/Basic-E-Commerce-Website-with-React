import { createContext, useContext } from "react";

const FilterCategoryContext = createContext();
const useFilterCategoryContext = () => {
    return useContext(FilterCategoryContext);
}

export { FilterCategoryContext, useFilterCategoryContext }