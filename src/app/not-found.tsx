"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen h-min bg-white text-neutral-950 select-none">
      <div className="w-full h-screen flex items-center justify-center">
        <Image
          src="/assets/anime_girl_render.png"
          alt="404 Not Found"
          width={858}
          height={1200}
          quality={100}
          className="w-auto h-5/6 mt-auto mr-12"
          priority
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-black">404 Not Found</h1>
          <p className="text-base leading-7 font-normal text-neutral-400">
            Oh tidak! Halaman yang kamu cari tidak ditemukan. Maaf ya
            Human-Kun... :{"<"}
          </p>
          <span className="text-base leading-7 font-light mt-4">
            Untuk kembali ke halaman utama, kamu bisa klik{" "}
            {
              <Button
                type="button"
                className="bg-white text-neutral-950 rounded-none p-0 border-none border-neutral-950 focus:ring-0 focus-visible:ring-0 focus-visible:border-neutral-950 text-base font-medium"
                onClick={() => router.push("/")}
              >
                disini!
              </Button>
            }
          </span>
        </div>
      </div>
    </div>
  );
}
