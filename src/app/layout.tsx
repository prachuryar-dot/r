import type { Metadata } from 'next';
import { Raleway, Montserrat } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';
import { ModalProvider } from '@/contexts/ModalContext';
import { ModalManager } from '@/contexts/ModalManager';
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pattemestates.com'),
  title: {
    template: '%s | Pattem Estates',
    default: 'Pattem Estates - Premium Properties in India',
  },
  description:
    'Discover premium residential and commercial properties across major cities in India',
  keywords: 'real estate, properties, apartments, villas, commercial spaces',
  authors: [{ name: 'Pattem Estates' }],
  creator: 'Pattem Estates',
  publisher: 'Pattem Estates',
  verification: {
    google: '4-davebAc8sxHmQ2daWjZDCIat3r6zEfx9DQMHblSyI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Pattem Estates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PattemEstates',
    creator: '@PattemEstates',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TMR7M5RC');
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMR7M5RC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* Modal Manager should be at the root level to render modals globally */}
          <ModalManager />
        </ModalProvider>
      </body>
    </html>
  );
}
