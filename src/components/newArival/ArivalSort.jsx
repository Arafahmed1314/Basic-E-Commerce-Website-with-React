import { useState, useRef, useEffect } from "react";
import DownArrow from "../svgIcon/DownArrow";
import SortOptions from "./SortOptions";
import { useProductContext } from "../context/Context";
import useClickOutside from "../hook/useClickOutSide";

export default function ArivalSort() {
  const [showSort, setShowSort] = useState(false);
  const sortRef = useRef(null);
  const { setSortOption } = useProductContext();

  useClickOutside(sortRef, () => setShowSort(false));

  const handleSortOption = (option) => {
    setSortOption(option); // Update sort option in the context
    setShowSort(false); // Hide sort options when an option is selected
  };

  return (
    <div ref={sortRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowSort(!showSort)}
        >
          Sort
          <DownArrow />
        </button>
      </div>

      {/* Sort Options */}
      {showSort && <SortOptions onSelectionOption={handleSortOption} />}
    </div>
  );
}
