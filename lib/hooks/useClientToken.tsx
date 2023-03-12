import { useSession } from "next-auth/react";

export default function useClientToken() {
     const { data, status } : { data: any , status : string } = useSession();
     let token = data?.user.token.token
  return token
}
