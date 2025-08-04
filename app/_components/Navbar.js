export default Navbar;
import Logo from "./Logo";

import SideNavigation from "./SideNavigation";
import NavList from "./NavList";

function Navbar() {
  return (
    <div className="flex items-center h-20  bg-emerald-300  text-emerald-900 font-semibold">
      <div className=" ml-6  flex-1/5 md:ml-12">
        <Logo />
      </div>
      <div className=" flex-1/2 mr-6  hidden  md:block md:text-sm">
        <NavList />
      </div>
      <div className="md:hidden">
        <SideNavigation />
      </div>
    </div>
  );
}
