import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: 'Your Name - Portfolio',
  description: 'Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.',
  keywords: ['developer', 'portfolio', 'full-stack', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Your Name - Portfolio',
    description: 'Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Portfolio',
    description: 'Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-dark-900 text-dark-900 dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
