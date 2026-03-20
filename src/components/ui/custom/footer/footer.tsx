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
    <footer className="bg-[#FFD1DC] w-full min-h-8 p-8 flex items-center justify-center text-neutral-950">
      <div className="max-w-7xl w-full space-y-4 flex flex-col">
        <div className="flex items-start justify-between gap-8">
          <div className="w-1/2 flex items-start space-x-4">
            <Image
              src="/assets/Cosukita transparent.png"
              alt="Cosukita"
              width={1024}
              height={1024}
              quality={100}
              className="h-auto w-32"
              priority
            />
            <div>
              <h1 className="text-3xl font-black text-neutral-950">Cosukita</h1>
              <p className="w-5/6 text-sm leading-7 font-normal text-[#78555E]">
                Cosukita is an Indonesian platform built by otakus, for otakus,
                where you can buy, sell, and rent anime costumes from all around
                the city. Whether you’re a pro cosplayer or just vibin’ for your
                first con — we gotchu. 💫
              </p>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-12 grid-flow-col gap-4">
            <div className="col-span-6">
              <h1 className="text-2xl font-semibold text-[#78555E] mb-1">
                Follow Us!
              </h1>
              {followUsLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-base font-light text-[#CAA0AB] transition-colors ease-out duration-300 hover:text-[#926D77]"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
            <div className="col-span-6">
              <h1 className="text-2xl font-semibold text-[#78555E] mb-1">
                Contact Us!
              </h1>
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-base font-light text-[#CAA0AB] transition-colors ease-out duration-300 hover:text-[#926D77]"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start space-y-2">
          <Separator className="bg-neutral-950" />
          <span>&copy; {dayjs().year()} Cosukita. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
