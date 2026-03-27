import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Annaya Boutique — Draped in Elegance',
  description:
    'Discover our exclusive festive collection featuring handpicked designs and premium fabrics crafted for your most memorable moments.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      }
    ],
  },
  openGraph: {
    title: 'Annaya Boutique — Draped in Elegance',
    description: 'Discover our exclusive festive collection featuring handpicked designs and premium fabrics crafted for your most memorable moments.',
    url: '/',
    siteName: 'Annaya Boutique',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Annaya Boutique Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annaya Boutique — Draped in Elegance',
    description: 'Discover our exclusive festive collection featuring handpicked designs and premium fabrics crafted for your most memorable moments.',
    images: ['/android-chrome-512x512.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen pb-24 md:pb-0">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
