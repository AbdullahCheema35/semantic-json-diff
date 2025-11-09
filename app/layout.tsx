import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://semantic-json-diff.vercel.app'),
  title: {
    default: 'Semantic JSON Diff | AI-Powered JSON Comparison Tool',
    template: '%s | Semantic JSON Diff',
  },
  description:
    'Free online semantic JSON diff tool that compares meaning-based differences between JSON objects. Visualize additions, deletions, and modifications with color-coded highlights.',
  keywords: [
    'semantic json diff',
    'json diff tool',
    'compare json online',
    'ai json comparison',
    'json difference viewer',
    'nested json diff',
  ],
  authors: [{ name: 'Muhammad Abdullah Cheema' }],
  openGraph: {
    title: 'Semantic JSON Diff — Smarter JSON Comparison',
    description:
      'Understand JSON differences semantically, not just textually. Free AI-powered JSON diff viewer for developers.',
    url: 'https://semantic-json-diff.vercel.app',
    siteName: 'Semantic JSON Diff',
    images: [
      {
        url: 'https://semantic-json-diff.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Semantic JSON Diff Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semantic JSON Diff — Compare JSON Objects Semantically',
    description:
      'Beautiful and intuitive tool to compare JSON objects semantically with multi-level nesting support.',
    images: ['https://semantic-json-diff.vercel.app/og-image.png'],
    creator: '@abdullaah_35',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://semantic-json-diff.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Extra meta for social preview fallback */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* ✅ Structured data for rich results */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Semantic JSON Diff',
              description:
                'AI-powered semantic JSON diff viewer that compares meaning-based differences in JSON data.',
              applicationCategory: 'DeveloperTool',
              operatingSystem: 'All',
              url: 'https://semantic-json-diff.vercel.app',
              image: 'https://semantic-json-diff.vercel.app/og-image.png',
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
