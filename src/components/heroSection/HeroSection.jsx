import HeroDetails from "./HeroDetails";
import HeroImages from "./HeroImages";

export default function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <HeroDetails />
            <div>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700"
                >
                  Shop Collection
                </a>
              </div>
              <HeroImages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
