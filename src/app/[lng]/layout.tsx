import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import { Layout } from '@/components/Layout'
import { Providers } from '@/app/[lng]/providers'
import { languages } from '../i18n/settings'
import { dir } from 'i18next'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - Luis Schmitt',
    default: 'Software developer, and tech enthusiast',
  },
  description:
    'I’m Luis, a software developer and tech enthusiast based in Germany - Karlsruhe. I’m one of the lead developers at OneCalendar, where we strive to build software that empowers the digitalisation of businesses.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: {
    lng: string
  }
}) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className='h-full antialiased'
      suppressHydrationWarning
    >
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Layout lng={lng}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
