"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CircleUser, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface NavListProps {
  items: Array<NavListItemProps>;
}

interface NavListItemProps {
  key?: string;
  title: string;
  url: string;
  disabled?: boolean;
}

const NavList: React.FC<NavListProps> = ({ items }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul className="flex items-center space-x-4">
      {items.map((item, idx) => (
        <li key={item.key || idx}>
          <Button
            onClick={() => router.push(item.url)}
            className={`relative bg-white rounded-none p-2 focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent text-sm font-medium transition-all duration-300 text-[#CAA0AB] ${pathname === item.url ? "after:transition-all after:ease-out after:duration-300 after:content-[''] after:absolute after:mt-6 after:w-2/3 after:border-b-2 after:border-[#CAA0AB] hover:after:w-full" : ""}`}
            disabled={item.disabled}
          >
            {item.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default function Nav() {
  return (
    <nav className="fixed z-50 top-0 w-full h-8 px-4 py-8 bg-white border-b-2 border-neutral-950 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="px-2 py-1 bg-[#FFD1DC] border-2 border-neutral-950">
          <span className="text-neutral-950 text-lg font-bold">
            COSUKITA {}
          </span>
        </div>
        <NavList
          items={[
            { title: "Home", url: "/" },
            { title: "Products", url: "/products" },
            { title: "About", url: "/about" },
            { title: "Contact", url: "/contact", disabled: true },
          ]}
        />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <InputGroup>
          <InputGroupAddon align="inline-end">
            <Search />
          </InputGroupAddon>
          <InputGroupInput type="search" id="search" placeholder="search" />
        </InputGroup>
        <Button className="bg-white text-neutral-950 rounded-none p-2 border-2 border-neutral-950 focus:ring-0 focus-visible:ring-0 focus-visible:border-neutral-950">
          <ShoppingCart />
        </Button>
        <Button className="bg-white text-neutral-950 rounded-none p-2 border-2 border-neutral-950 focus:ring-0 focus-visible:ring-0 focus-visible:border-neutral-950">
          <CircleUser />
        </Button>
      </div>
    </nav>
  );
}
