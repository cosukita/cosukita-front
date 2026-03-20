"use client";

import * as React from "react";

import Store from "@/contexts/store";

const Hydration = () => {
  React.useEffect(() => {
    if (globalThis.window !== undefined) Store.bearStore.persist.rehydrate();
  }, []);
};

export default Hydration;
