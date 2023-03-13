import { useSession } from "next-auth/react";

export default function useClientToken() {
     const { data} : any = useSession();
     let token = data?.user.token.token
  return token
}
