import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, Inter } from "next/font/google";
import "./payway.css";

/**
 * Font persis seperti preview PayWay (jiro.build):
 * - Inter 400-700 sebagai sans utama (body & UI)
 * - Instrument Serif 400 (regular + italic) untuk kata aksen heading
 * - Geist 300-700 dimuat halaman aslinya (angka/UI sekunder)
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-pw-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-pw-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-pw-geist",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakusultan.id"),
  title: "Saku Sultan — Mudahkan Hidupmu dengan Transaksi Kekinian",
  description:
    "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua dalam satu genggaman. Praktis, cepat, dan aman. #PastiUNTUNG",
  openGraph: {
    title: "Saku Sultan — Mudahkan Hidupmu dengan Transaksi Kekinian",
    description:
      "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua dalam satu genggaman. Praktis, cepat, dan aman. #PastiUNTUNG",
    url: "/",
    siteName: "Saku Sultan",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saku Sultan — Mudahkan Hidupmu dengan Transaksi Kekinian",
    description:
      "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua dalam satu genggaman. #PastiUNTUNG",
  },
  icons: {
    icon: "/images/saku-sultan-app-icon.png",
    apple: "/images/saku-sultan-app-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#042718",
  width: "device-width",
  initialScale: 1,
};

export default function PaywayRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${instrumentSerif.variable} ${geist.variable}`}
    >
      <body suppressHydrationWarning className="pw-body min-h-screen">
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[#168344] focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#042718]"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
