import CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth ,{NextAuthOptions} from "next-auth"

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials as any
        
        const res = await fetch("http://localhost:8000/v1/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

       const user = await res.json()

        if (res.ok && user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({token, user}){
      return {...user, ...token}
    },
    async session({ session, token, user }){
      session.user = {...user, ...token}
      return session
    }
  },
  pages:{
    signIn: "/login",
  }
}

export default NextAuth(authOptions)

