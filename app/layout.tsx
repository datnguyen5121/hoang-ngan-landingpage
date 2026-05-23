import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://minmin.vn'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Học Văn Cô Ngân - Ngữ văn THCS & THPT',
    template: '%s | Học Văn Cô Ngân',
  },
  description: 'Khoá học Ngữ văn THCS & THPT cùng cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Thạc sĩ Văn học Việt Nam, giáo viên tận tâm với hơn 4 năm kinh nghiệm tại Đà Nẵng.',
  keywords: ['học văn', 'ngữ văn THCS', 'ngữ văn THPT', 'luyện thi văn', 'giáo viên Ngữ văn', 'Hoàng Ngân', 'học văn Đà Nẵng'],
  authors: [{ name: 'Học Văn Cô Ngân' }],
  creator: 'Học Văn Cô Ngân',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/',
    siteName: 'Học Văn Cô Ngân',
    title: 'Học Văn Cô Ngân - Ngữ văn THCS & THPT',
    description: 'Khoá học Ngữ văn THCS & THPT cùng cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Thạc sĩ Văn học Việt Nam, giáo viên tận tâm với hơn 4 năm kinh nghiệm tại Đà Nẵng.',
    images: [
      {
        url: '/hoang-ngan/personel.jpg',
        width: 800,
        height: 800,
        alt: 'Học Văn Cô Ngân - Ngữ văn THCS & THPT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Học Văn Cô Ngân - Ngữ văn THCS & THPT',
    description: 'Khoá học Ngữ văn THCS & THPT cùng cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Thạc sĩ Văn học Việt Nam, giáo viên tận tâm với hơn 4 năm kinh nghiệm tại Đà Nẵng.',
    images: ['/hoang-ngan/personel.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/hoang-ngan/personel.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
