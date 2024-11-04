import OpenMenu from "./OpenMenu";
import Logo from "./Logo";
import LeftMenus from "./LeftMenus";
import RightMenus from "./RightMenus";
export default function NavBar() {
  return (
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          <OpenMenu />
          <Logo />
          <LeftMenus />
          <RightMenus />
        </div>
      </div>
    </nav>
  );
}
