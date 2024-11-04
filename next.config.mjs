/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();
const nextConfig = {
  output: "standalone", // Add this for better Vercel deployment
};

export default nextConfig;
