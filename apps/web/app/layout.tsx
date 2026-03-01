import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SynConnect — Smart Digital Business Cards & Google Review Stands',
  description:
    'SynConnect makes networking effortless with NFC-powered digital business cards and Google Review Stands. Share your profile instantly and collect 5-star reviews with a single tap.',
  keywords: [
    'digital business card',
    'NFC business card',
    'Google review stand',
    'tap to review',
    'smart networking',
    'SynConnect',
    'contactless card',
    'QR business card',
  ],
  openGraph: {
    title: 'SynConnect — Smart Digital Business Cards & Google Review Stands',
    description:
      'NFC-powered digital cards that instantly share your profile — and Google Review stands that convert happy customers into public 5-star ratings.',
    siteName: 'SynConnect',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
