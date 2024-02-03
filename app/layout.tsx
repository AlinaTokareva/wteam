import "./globals.css"
import Providers from "./providers"
import { Metadata } from "next"
import React from "react"

const metadata: Metadata = {
    title: "WorshipTeam App"
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en" className="light">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}

export {RootLayout as default, metadata}
