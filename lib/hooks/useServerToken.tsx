import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default function useServerToken() {
  return getServerSession(authOptions).then((session: any) => {
    let token = session.user.token.token;
    return token;
  });
}
