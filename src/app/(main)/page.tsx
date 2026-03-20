import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/module/home/homePage"), {
  ssr: true,
});

export default Page;
