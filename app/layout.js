//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fanta.css"
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); <body className={`${geistSans.variable} ${geistMono.variable}`}>*/

export const metadata = {
  title: "Smallstore",
  description: "A store for programmers and productivity fiends alike",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body >
        <div id="portal" />
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={'/'}>
                <h1>Smallstore</h1>
              </Link>
              <h5 className="mid-text">Cool stuff for cool people</h5>
              <Cart />
            </div>
          </header>
          <main>
            {children}
          </main>
          <div className="hr" />

          <footer>
            <div className="email-container">
              <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
              <EmailInput />
            </div>
            <div className="links-container">
              <div>
                <h3>Erick</h3>
                <Link href={'/'}>Erick Hub</Link>
                <Link href={'/'}>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/faq'}>FAQ</Link>
              </div>
            </div>
            <div className="socials">
              <p>© <a href="https://github.com/00437110/3_smallstore" target="_blank"> Erick</a> 2025
              <br /> Built with Next JS & <a target="_blank" href="https://fantacss.smoljames.com/">FantaCSS</a>🎇 
              </p>
            </div>
            <div className="social-links">
              <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
              <Link href={'/'} target="_blank"><i className="fa-brands fa-youtube"></i></Link>
              <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
