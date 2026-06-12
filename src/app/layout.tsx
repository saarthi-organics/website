import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";

export const metadata: Metadata = {
  title: "Saarthi Organics - Industrial Molasses Supplier & Procurement Partner",
  description: "Reliable molasses procurement partner via dedicated transport tankers across North India. Sourcing solutions for distilleries, feed mills, yeast, tobacco, and food processing.",
  icons: {
    icon: '/logo_heritage.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AttributionTracker />
        <div className="bg-mesh-container"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
