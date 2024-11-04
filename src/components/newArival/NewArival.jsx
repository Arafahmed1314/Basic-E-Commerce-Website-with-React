import Providers from "../provider/Providers";
import ArivalDataStructure from "./ArivalDataStructure";
import ArivalHeading from "./ArivalHeading";
import ArivalProducts from "./ArivalProducts";

export default function NewArival() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <Providers>
          <ArivalHeading />
          <ArivalDataStructure />
          <ArivalProducts />
        </Providers>
      </div>
    </div>
  );
}
