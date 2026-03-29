"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="h-min min-h-screen w-full bg-white text-neutral-950 select-none">
      <div className="flex h-screen w-full items-center justify-center">
        <Image
          src="/assets/anime_girl_render.png"
          alt="404 Not Found"
          width={858}
          height={1200}
          quality={100}
          className="mt-auto mr-12 h-5/6 w-auto"
          priority
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-black">404 Not Found</h1>
          <p className="text-base leading-7 font-normal text-neutral-400">
            Oh tidak! Halaman yang kamu cari tidak ditemukan. Maaf ya
            Human-Kun... :{"<"}
          </p>
          <span className="mt-4 text-base leading-7 font-light">
            Untuk kembali ke halaman utama, kamu bisa klik{" "}
            {
              <Button
                type="button"
                className="rounded-none border-none border-neutral-950 bg-white p-0 text-base font-medium text-neutral-950 focus:ring-0 focus-visible:border-neutral-950 focus-visible:ring-0"
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
