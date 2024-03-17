/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"

const nextConfig = {
  dest: "public",
}

export default withPWA(nextConfig)
