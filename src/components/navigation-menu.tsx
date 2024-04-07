"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { useState } from "react";
import { ModeToggle } from "./ui/theme-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
       
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Who are we?</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Mission">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/mission">What we do?</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/marketplace">Marketplace</HoveredLink>
            <HoveredLink href="/analytics">Analytics</HoveredLink>
            <HoveredLink href="/ai-helper">Recommendations</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export function NavigationMenu() {
  return (
    <div className="flex flex-row items-center w-full ">
      <Navbar className="top-2" />
    </div>
  );
}
export default NavigationMenu;
