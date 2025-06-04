import "./globals.css";

export const metadata = {
  title: "SimWork - The Future of Work Simulation",
  description: "Immersive AI-powered 2.5D simulation game that replicates the future of work. Prove your skills, play your job.",
  keywords: "hiring, simulation, skills assessment, gamification, recruitment, AI, 2.5D, work simulation",
  authors: [{ name: "SimWork Team" }],
  creator: "SimWork",
  publisher: "SimWork",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://simwork.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SimWork - The Future of Work Simulation",
    description: "Immersive AI-powered 2.5D simulation game that replicates the future of work. Prove your skills, play your job.",
    url: 'https://simwork.ai',
    siteName: 'SimWork',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimWork - The Future of Work Simulation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SimWork - The Future of Work Simulation",
    description: "Immersive AI-powered 2.5D simulation game that replicates the future of work. Prove your skills, play your job.",
    images: ['/twitter-image.jpg'],
    creator: '@simwork_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
    shortcut: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
    apple: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased bg-primary-900 text-neutral-100 overflow-x-hidden">
        <div id="root" className="min-h-screen">
          {children}
        </div>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
