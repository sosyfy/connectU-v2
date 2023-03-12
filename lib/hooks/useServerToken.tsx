import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function useServerToken() {
    const session: any = await getServerSession(authOptions)
    let token = session.user.token.token 
  return token
}
