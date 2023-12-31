import { inter } from '@/config/fonts'
import './globals.css'


export const metadata = {
  title: 'Ecommerce - Home',
  description: 'Página inicial del ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
