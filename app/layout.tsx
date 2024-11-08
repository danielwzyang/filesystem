import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "file system",
    description: "cloud file system project",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/folder.svg" type="image/svg+xml" />
            </head>
            <body className={outfit.className}>
                {children}
            </body>
        </html>
    )
}
