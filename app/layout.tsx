import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"
import bg from './Component/rocket1.png'
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalContextProvider } from "./context/GlobalContext"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative graph-paper flex min-h-screen flex-col">
              
              <div className="absolute sm:mt-10 sm:block hidden inset-0 z-0">
                <Image
                    src={bg}
                    alt="background image"
                   width={200}
                />
            </div>
            <SiteHeader />
              <div className="flex-1 z-10">
                <GlobalContextProvider>
                {children}
                </GlobalContextProvider>
                
                </div>
              <div className="mt-8"></div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
