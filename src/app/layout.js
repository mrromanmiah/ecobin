import AuthProvider from '@/utils/AuthProvider/AuthProvider'
import './globals.css'

export const metadata = {
  title: 'EcoBin - Smart waste management system',
  description: 'A smart waste management system for waste management companies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true} className='dark:bg-black'>
        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  )
}
