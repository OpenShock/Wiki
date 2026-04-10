"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import AlgoliaSearchDialog from "@/components/search";
import type { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog: AlgoliaSearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
