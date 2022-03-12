import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHU_CLIENT_ID,
      clientSecret: process.env.GITHU_CLIENT_SECRET,
      scope:'read:user'
    }),

  ],
})