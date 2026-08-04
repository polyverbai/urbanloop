import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import NotificationProvider from "@/components/ui/notification/NotificationProvider";
import ConfirmProvider from "@/components/ui/dialog/ConfirmProvider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UrbanLoop | Circular Economy & Smart Recycling Platform",
  description:
    "UrbanLoop transforms waste into value through recycling, rewards, composting and measurable environmental impact.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#72B543",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${poppins.variable} ${inter.variable}`}
>
      <body>

  <NotificationProvider>

    <ConfirmProvider>

      {children}

    </ConfirmProvider>

  </NotificationProvider>

</body>
    </html>
  );
}