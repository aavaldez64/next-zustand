import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SideMenu } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-200 overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
          <div className="flex flex-row relative w-screen">
            <SideMenu />

            <div className="w-full p-4">
              {children}
            </div>

          </div>

        </div>
      </body>
    </html>
  )
}
