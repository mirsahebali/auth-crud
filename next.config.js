/** @type {import('next').NextConfig} */
require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GRAPHCMS_TOKEN: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzc1ODQ1NDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZWp6MXBuZTB2M2gwMXVvMnNnbzViZW4vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImQ5NWQyNmJlLTNmNTYtNGE0Ni1iYjUwLTk4YjAyNTliYTZhMyIsImp0aSI6ImNsZW82aXJ2ZjB4dnUwMXQ2NjFtdWhsZTYifQ.Mjs-93vZZXyIQEbCt0k7anq9acZSI7ZjMtdJB6fqlqT7dk_WNFw6QS4Oyeoh7_2hiGcf3_FCw-kUWQuHz3Pt7aJKhaOtY9kW8DiQuMW2NOiYHQGy6KwVfBTAjtxPx1SBt6cxzJAlyG7W21mxNe0UL-bMxkGWL1DVvRtpf07uAKerGET5VLE5MYkV1nx-lJkNRQichbPcCK015aheFvCs0FcRMn5Qfcq7tzQWlhsJW8AXYkGPa9aOv3m4hg78GrZYds7Z9uR8GqOX54ZKAJKkkY0ayMnxK6FsYyUEPUFQpQUQQ502MCobznn3bncOfmSl7raSOUWaAOqp3JHGHYjFc2mpQxqF594rWQ3gIl3e4oYPOwBSttHcnv8nbX9GVjxYzO4X0yhUmpYapeBKIo_IyHgYnSLlsSlAaEkl6VToIbtgFyiGlIgQPmzycmSyPCTlgORi6wlT1mvODGsxe7xpC-IYq6EovCZ9F5X-JZsHThwU3w0VOICgeBn0EVvogkbpJK5X9l2g4UnWC9Hoh0SHAl4VYFnT0ut31ptGCRv1e-8yxFNfLS97Ssr-o4qK6A9g9sJ0hYyggfPr8Ra9_D4xnvDbhV_SzEqFKr6kIamiw6XRpOsHayHPNLdA24rLj5seiiRqGZ8koKem1uOPbMJDGiGrXUjQjaK9av6Cluxjwp8"
  }
}

module.exports = nextConfig
