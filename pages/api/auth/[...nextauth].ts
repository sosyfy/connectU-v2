import CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth ,{NextAuthOptions} from "next-auth"


export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "credentials",
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
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
  
  secret: process.env.NEXTAUTH_SECRET,
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
    signOut: "/login"
  }
}

export default NextAuth(authOptions)

