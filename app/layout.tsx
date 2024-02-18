import { Nav } from "$components/nav";
import { Provider } from "$context";
import "$styles/global.css";
import { Metadata } from "next";
import { Anek_Bangla, Hind_Siliguri, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  icons: {
    shortcut: "/icons/dua-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={[inter.variable, hindSiliguri.variable, anekBangla.variable].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icons/dua-logo.svg" />
      </head>
      <body className={`pb-10 font-hind ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
