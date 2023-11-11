import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Blob from './components/Blob';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uncoverify',
  description: 'Uncover your musical aura',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>
      <Providers>
        <Blob>{children}</Blob>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
