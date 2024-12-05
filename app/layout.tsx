import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header/Header"
import { cn } from "@/lib/utils"
import { bricolage, gilroy, kalam, mont, poppins } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "ZuAI Home",
  description: "IB landing Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          bricolage.variable,
          mont.variable,
          kalam.variable,
          gilroy.variable,
          poppins.variable
        )}
      >
        <div className="bg-white">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
