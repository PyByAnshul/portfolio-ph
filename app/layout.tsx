import type React from "react"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

const kanit = Kanit({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Jack -- 3D Creator",
  description: "3D Creator specializing in 3D modeling, rendering, motion design, branding, and web design.",
  keywords: "3D Creator, 3D Modeling, Rendering, Motion Design, Branding, Web Design",
  authors: [{ name: "Jack" }],
  openGraph: {
    title: "Jack -- 3D Creator",
    description: "Striking and unforgettable 3D projects",
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
    <html lang="en" className="scroll-smooth bg-[#0C0C0C]">
      <body className={`${kanit.className} bg-[#0C0C0C]`}>{children}</body>
    </html>
  )
}
