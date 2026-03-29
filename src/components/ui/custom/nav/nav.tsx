"use client";

import { CircleUser, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex h-8 w-full items-center justify-between border-b-2 border-neutral-950 bg-white px-4 py-8">
      <div className="hidden items-center space-x-4 md:flex">
        <div className="border-2 border-neutral-950 bg-[#FFD1DC] px-2 py-1 select-none">
          <span className="text-lg font-bold text-neutral-950">COSUKITA</span>
        </div>
      </div>
      <div className="md:hidden">
        <Image
          src="/assets/Cosukita transparent.png"
          alt="Cosukita"
          width={1024}
          height={1024}
          quality={100}
          className="h-auto w-14"
          priority
        />
      </div>
      <div className="hidden md:block">
        <InputGroup className="w-36 md:w-lg lg:w-2xl xl:w-4xl">
          <InputGroupAddon align="inline-end">
            <Search />
          </InputGroupAddon>
          <InputGroupInput type="search" id="search" placeholder="search" />
        </InputGroup>
      </div>
      <div className="flex w-full items-center justify-end space-x-4 md:w-fit">
        <Button className="rounded-none border-2 border-neutral-950 bg-white p-2 text-neutral-950 focus:ring-0 focus-visible:border-neutral-950 focus-visible:ring-0">
          <ShoppingCart />
        </Button>
        <Button className="rounded-none border-2 border-neutral-950 bg-white p-2 text-neutral-950 focus:ring-0 focus-visible:border-neutral-950 focus-visible:ring-0">
          <CircleUser />
        </Button>
      </div>
    </nav>
  );
}
