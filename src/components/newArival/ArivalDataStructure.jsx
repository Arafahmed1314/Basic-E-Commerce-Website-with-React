import ArivalFilter from "./ArivalFilter";
import ArivalSearch from "./ArivalSearch";
import ArivalSort from "./ArivalSort";

export default function ArivalDataStructure() {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        {/* <!-- Sort & Filter--> */}
        <div className="w-full">
          {/* <!-- Sort Start --> */}
          <ArivalSort />
          {/* <!-- Sort End --> */}

          {/* <!-- Filter Start --> */}
          <ArivalFilter />
          {/* <!-- Filter End --> */}
        </div>

        {/* <!-- Search and Cart --> */}
        <ArivalSearch />
      </div>
    </div>
  );
}
