import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';



const robotoMono = Roboto_Mono({
  weight: ['100', '400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto-mono', 
});

export const metadata = {
  title: 'DPE',
  description: 'Digital Privacy Education - information on how to be secured online',
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
