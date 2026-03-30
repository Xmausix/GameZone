import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'PlayNexus - Your Instant Gaming Universe',
    template: '%s | PlayNexus',
  },
  description: 'Discover and play thousands of free browser-based games instantly. No downloads, just pure fun.',
  keywords: ['browser games', 'online games', 'free games', 'play games online', 'arcade games', 'puzzle games'],
  authors: [{ name: 'PlayNexus' }],
  creator: 'PlayNexus',
  publisher: 'PlayNexus',
  robots: 'index, follow',
  openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://playnexus.com',
      title: 'PlayNexus',
      description: 'The ultimate destination for free browser-based gaming.',
      siteName: 'PlayNexus',
  },
  twitter: {
      card: 'summary_large_image',
      title: 'PlayNexus - Instant Gaming Universe',
      description: 'No downloads, just play. Discover your next favorite game on PlayNexus.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn("font-body antialiased flex flex-col min-h-screen", inter.variable)}>
        <div className="flex-1">
          {children}
        </div>
        <Toaster />
        <footer className="py-6 mt-auto text-center text-muted-foreground bg-background">
            <div className="container">
                <p className="text-sm">&copy; {new Date().getFullYear()} PlayNexus. All rights reserved.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}
