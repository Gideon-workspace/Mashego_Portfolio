import "./globals.css";
import NavBar from '@/app/components/NavBar'; 
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Mashego Portfolio",
  description:  "Portfolio showcasing AI/ML projects and software development applications by Mashego Gideon Mabeloane.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
