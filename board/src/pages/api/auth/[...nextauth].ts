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
  callbacks:{
    async session(session,profile){
      try{
        return{
          ...session,
          id:profile.sub
        }
      }catch{
        return{
          ...session,
          id:null
        }
      }
    },
    async singIn(user,account,profile){
        const {email}=user
        try{
          return true
        }catch(error){
          console.log(error)
          return false
        }
    }
  }
})