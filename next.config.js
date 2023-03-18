/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL:"http://localhost:3000",
    DB_URI: "mongodb+srv://robinyjord:Solsken1@cluster0.dq1qy6q.mongodb.net/?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
