"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive} >
        <Link href={"/"} >
        <MenuItem setActive={setActive} active={active}  item="Home">
          
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="projects/webdev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">App Development</HoveredLink>
            <HoveredLink href="/branding">Branding And Designing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          
          
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
