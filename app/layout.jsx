import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Central Developer Course | Master AL & Extensions",
  description:
    "Hands-on course for developers building extensions for Microsoft Dynamics 365 Business Central. Learn AL, VS Code tooling, AppSource, testing, and integrations.",
  openGraph: {
    title: "Business Central Developer Course",
    description:
      "Hands-on course for developers building extensions for Microsoft Dynamics 365 Business Central.",
    url: "https://agentic-de5f288c.vercel.app",
    siteName: "BC Dev Course",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Business Central Developer Course",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
