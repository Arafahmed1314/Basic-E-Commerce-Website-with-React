import { useProductContext, useSearchContext } from "../context/Context";

import ArivalLoading from "./ArivalLoading";
import ProductCard from "./ProductCard";

export default function ArivalProducts() {
  const { arrivalData, loading, sortOption } = useProductContext();
  const { searchValue } = useSearchContext();

  const filterValue = arrivalData.filter((value) =>
    value.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const sortedData = [...filterValue].sort((a, b) =>
    sortOption === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Display loading placeholders if loading */}
            {loading
              ? Array(8)
                  .fill(0)
                  .map((_, index) => <ArivalLoading key={index} />)
              : sortedData.map((data) => (
                  <ProductCard key={data.id} product={data} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
