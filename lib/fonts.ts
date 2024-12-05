import { Kalam, Poppins } from "next/font/google"
import localFont from "next/font/local"

export const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
})

export const bricolage = localFont({
  src: [
    { path: "../assets/fonts/BricolageGrotesque-Light.woff2", weight: "300" },
    { path: "../assets/fonts/BricolageGrotesque-Regular.woff2", weight: "400" },
    { path: "../assets/fonts/BricolageGrotesque-Medium.woff2", weight: "500" },
    {
      path: "../assets/fonts/BricolageGrotesque-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/BricolageGrotesque-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-bricolage",
})

export const mont = localFont({
  src: [
    { path: "../assets/fonts/Mont-Light.woff2", weight: "400" },
    // { path: "../assets/fonts/Mont-book.woff2", weight: "500" },
    { path: "../assets/fonts/Mont-Regular.woff2", weight: "600" },
    { path: "../assets/fonts/Mont-SemiBold.woff2", weight: "700" },
    { path: "../assets/fonts/Mont-Bold.woff2", weight: "800" },
    { path: "../assets/fonts/Mont-Heavy.woff2", weight: "900" },
  ],
  display: "swap",
  preload: true,
  variable: "--font-mont",
})

export const gilroy = localFont({
  src: [
    { path: "../assets/fonts/Gilroy-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/Gilroy-Medium_with.ttf", weight: "500" },
    { path: "../assets/fonts/Gilroy-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/Gilroy-Bold.ttf", weight: "700" },
  ],
  display: "swap",
  preload: true,
  variable: "--font-gilroy",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})