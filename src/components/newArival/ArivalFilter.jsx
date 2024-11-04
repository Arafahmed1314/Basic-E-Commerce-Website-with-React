import { useRef, useState } from "react";
import DownArrow from "../svgIcon/DownArrow";
import FilterOption from "./FilterOption";
import useClickOutside from "../hook/useClickOutSide";

export default function ArivalFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);

  // Use the custom hook for closing the dropdown when clicking outside
  useClickOutside(filterRef, () => setShowFilter(false));

  return (
    <div className="relative inline-block text-left" ref={filterRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded={showFilter}
          aria-haspopup="true"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
          <DownArrow />
        </button>
      </div>
      {/* Filter options */}
      {showFilter && <FilterOption />}
    </div>
  );
}
