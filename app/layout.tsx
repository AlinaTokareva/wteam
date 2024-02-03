import "./globals.css"
import Providers from "./providers"
import { Metadata } from "next"
import React from "react"
import SideBar from "@/app/components/sidebar/sidebar"

const metadata: Metadata = {
    title: "WorshipTeam App"
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="ru" className="light">
        <body>
        <Providers>
            <SideBar />
            {children}
        </Providers>
        </body>
        </html>
    )
}

export {RootLayout as default, metadata}
