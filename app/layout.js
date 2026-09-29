import { Inter, Montserrat_Alternates } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Беремо й веземо",
  description:
    "Перевезення меблів, техніки, особистих речей і будматеріалів у Зеленодольську, Криворізькому районі та між містами України.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
