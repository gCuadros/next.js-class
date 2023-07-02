import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

interface Props {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const Links = [
  { label: 'Home', href: '/' },
  { label: 'wiki', href: '/wiki' }
]

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <ul>
            {Links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}

export default RootLayout