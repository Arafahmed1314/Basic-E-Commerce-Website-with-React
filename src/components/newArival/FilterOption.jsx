// import { useState } from "react";
import { useProductContext } from "../context/Context";
import { useFilterCategoryContext } from "../context/FilterCategoryContext";

export default function FilterOption() {
  const { checkValue, setCheckValue, setCategoryValue } =
    useFilterCategoryContext();
  // const { setCategoryValue } = useFilterCategoryContext();

  const { arrivalData } = useProductContext();
  const allCategories = [...new Set(arrivalData.map((data) => data.category))];

  return (
    <div
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        {allCategories.map((category) => (
          <label
            key={category}
            className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              checked={checkValue === category} // Only one checkbox can be checked at a time
              onChange={() => {
                const newCheckValue = checkValue === category ? "" : category; // Calculate the new value
                setCheckValue(newCheckValue); // Update the checkValue state
                setCategoryValue(newCheckValue); // Set the category value immediately based on newCheckValue
              }} // Deselect if clicked again
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
