import type { Metadata } from 'next';
import { Antonio, Inter } from 'next/font/google';
import './globals.css';
import smoothscroll from 'smoothscroll-polyfill'

const inter = Inter({ subsets: ['latin'] });
const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deez the Dragon',
  description: 'Meet Deez, the friendly dragon',
  icons: '/deez.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html className="" lang="en">
      
      <body className={inter.className}>
        <div className={antonio.className}>
          {children}
        </div>
      </body>
    </html>
  );
}