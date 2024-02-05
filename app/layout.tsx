import "./globals.css"
import Providers from "./providers"
import { Metadata } from "next"
import React from "react"
import SideBar from "@/components/sidebar/sidebar"
import style from './layout.module.scss'

const metadata: Metadata = {
    title: "WorshipTeam App"
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="ru" className="light">
        <body>
        <Providers className={style.layoutContainer}>
            <SideBar className={style.sidebarContainer} />
            <main className={style.mainContainer}>
                {children}
            </main>

        </Providers>
        </body>
        </html>
    )
}

export {RootLayout as default, metadata}
