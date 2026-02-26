import type { Metadata } from 'next';
import './globals.css';
import { Toast } from '@/components/Toast';

export const metadata: Metadata = {
  title: 'SynConnect',
  description: 'SynConnect Web App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
