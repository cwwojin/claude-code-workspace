import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShopMall - 온라인 쇼핑몰',
  description: '믿을 수 있는 온라인 쇼핑 플랫폼',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
