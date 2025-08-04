"use client";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Drawer from "./Drawer";
import NavList from "./NavList";
import Link from "next/link";

function SideNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex items-center">
      <BurgerIcon isOpen={isDrawerOpen} toggle={toggleDrawer} />
      <div className="relative">
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
          <Link
            href="login"
            className="text-xl  mt-16 
            mb-8 inline-block hover:text-emerald-950 hover:font-bold transition-all text-center"
          >
            LOGIN/SIGN UP
          </Link>
          <NavList direction="flex-col" login={false} />
        </Drawer>
      </div>
    </div>
  );
}

export default SideNavigation;
