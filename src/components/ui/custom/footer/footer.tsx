"use client";

import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Separator } from "@/components/ui/separator";

interface LinksProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

export default function Footer() {
  const followUsLinks: Array<LinksProps> = [
    {
      title: "@cosukita.id",
      url: "https://www.instagram.com/cosukita.id/",
      icon: <FaInstagram size="16" />,
    },
    {
      title: "cosukita.id",
      url: "https://twitter.com/cosukita_id",
      icon: <FaXTwitter size="16" />,
    },
    {
      title: "Cosukita",
      url: "https://www.facebook.com/cosukita.id",
      icon: <FaFacebookF size="16" />,
    },
  ];

  const contactLinks: Array<LinksProps> = [
    {
      title: "+62 819-2766-5313",
      url: "tel:+62-819-2766-5313",
      icon: <FaPhone size="16" />,
    },
    {
      title: "contact@cosukita.id",
      url: "mailto:contact@cosukita.id",
      icon: <FaEnvelope size="16" />,
    },
  ];

  return (
    <footer className="flex min-h-8 w-full items-center justify-center bg-[#FFD1DC] p-8 text-neutral-950">
      <div className="flex w-full max-w-7xl flex-col space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex w-full flex-col items-start space-x-4 md:w-1/2 md:flex-row">
            <Image
              src="/assets/Cosukita transparent.png"
              alt="Cosukita"
              width={1024}
              height={1024}
              quality={100}
              className="mb-4 h-auto w-32 md:mb-0 md:w-16 lg:w-24 xl:w-32"
              priority
            />
            <div className="w-full">
              <h1 className="font-black text-neutral-950 lg:text-2xl xl:text-3xl">
                Cosukita
              </h1>
              <p className="w-full text-xs leading-7 font-normal text-[#78555E] md:w-5/6 xl:text-sm">
                Cosukita is an Indonesian platform built by otakus, for otakus,
                where you can buy, sell, and rent anime costumes from all around
                the city. Whether you’re a pro cosplayer or just vibin’ for your
                first con — we gotchu. 💫
              </p>
            </div>
          </div>
          <div className="grid w-full grid-flow-row gap-4 md:w-1/2 md:grid-cols-12">
            <div className="col-span-12 space-y-2 md:col-span-6">
              <h1 className="mb-2 text-base font-semibold text-[#78555E] md:mb-1 lg:text-xl xl:text-2xl">
                Follow Us!
              </h1>
              {followUsLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs font-light text-[#CAA0AB] transition-colors duration-300 ease-out hover:text-[#926D77] lg:text-sm xl:text-base"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
            <div className="col-span-12 space-y-2 md:col-span-6">
              <h1 className="mb-2 text-base font-semibold text-[#78555E] md:mb-1 lg:text-xl xl:text-2xl">
                Contact Us!
              </h1>
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs font-light text-[#CAA0AB] transition-colors duration-300 ease-out hover:text-[#926D77] lg:text-sm xl:text-base"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-start space-y-2 text-xs lg:text-sm xl:text-base">
          <Separator className="bg-neutral-950" />
          <span>&copy; {dayjs().year()} Cosukita. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
