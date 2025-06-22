import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anshul Kumar - Software Engineer",
  description:
    "Software Engineer with a proven record of delivering scalable backend solutions and streamlining operations. Skilled at leading cross-functional collaboration to build reliable APIs and automation tools.",
  keywords: "Software Engineer, Python Developer, Backend Developer, API Development, Django, Flask, FastAPI",
  authors: [{ name: "Anshul Kumar" }],
  openGraph: {
    title: "Anshul Kumar - Software Engineer",
    description: "Software Engineer specializing in backend development and API design",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
