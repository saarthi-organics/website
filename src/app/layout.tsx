import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";
import StickyActionBar from "@/components/StickyActionBar";

export const metadata: Metadata = {
  title: "Saarthi Organics - Industrial Molasses Supplier & Procurement Partner",
  description: "Reliable molasses procurement partner via dedicated transport tankers across North India. Sourcing solutions for distilleries, feed mills, yeast, tobacco, and food processing.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Saarthi Organics - Industrial Molasses Supplier & Procurement Partner",
    description: "Reliable molasses procurement partner via dedicated transport tankers across North India.",
    url: "https://www.saarthiorganics.com",
    siteName: "Saarthi Organics",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Saarthi Organics - Industrial Molasses Supplier & Procurement Partner",
    description: "Reliable molasses procurement partner via dedicated transport tankers across North India."
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
        <StickyActionBar />
      </body>
    </html>
  );
}
