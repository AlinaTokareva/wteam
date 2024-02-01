import './globals.css'
import {Providers} from './providers'
// import React from 'react'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className='light no-touch'>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}