import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/[[...slug]]">) {
  const base = baseOptions();
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...base}
      nav={{ ...base.nav }}
      tabs={false}
    >
      {children}
    </DocsLayout>
  );
}
