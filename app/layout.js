import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Localist",
  description: "Find Local Services Fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
