"use client"

import {NextUIProvider} from "@nextui-org/react"

const Providers = ({children, ...props}: { children: React.ReactNode }) => {
    return (
        <NextUIProvider {...props}>
            {children}
        </NextUIProvider>
    )
}

export default Providers
