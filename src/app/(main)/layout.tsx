import React from "react";

import Nav from "@/components/ui/custom/nav/nav";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      {children}
    </div>
  );
}
