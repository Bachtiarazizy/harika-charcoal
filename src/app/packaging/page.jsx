import PackagingExportPage from "@/components/info/process";

export const metadata = {
  title: "Packaging | Premium Charcoal Products",
  description: "Learn about our streamlined premium packaging options for bulk charcoal orders. We ensure quality and efficiency from our facility to your destination.",
  openGraph: {
    title: "& Packaging | Premium Charcoal Products",
    description: "Learn about our streamlined premium packaging options for bulk charcoal orders. We ensure quality and efficiency from our facility to your destination.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Export() {
  return <PackagingExportPage />;
}
