import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/[[...slug]]">) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions} tabs={false}>
      {children}
    </DocsLayout>
  );
}
