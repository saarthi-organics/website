import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Saarthi Organics - Industrial Molasses Supplier & Procurement Partner",
  description: "Reliable molasses procurement partner via dedicated transport tankers across North India. Sourcing solutions for distilleries, feed mills, yeast, tobacco, and food processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-mesh-container"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
