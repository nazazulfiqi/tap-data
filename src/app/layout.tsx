import Provider from '../context/provider';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TAP',
  description:
    'Perusahaan yang bergerak di bidang teknologi informasi dan komunikasi',
  icons: {
    icon : ['/favicon.ico?v=4'],
    shortcut: ['/favicon/favicon-32x32.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
