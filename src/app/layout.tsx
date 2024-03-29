import { Inter } from "next/font/google";
import Seo from "./components/seo";
import Header from "./components/header";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} light dark:dark text-black dark:text-sky-300`}
      >
        <ThemeProvider>
          <Seo />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
