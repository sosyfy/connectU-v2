import Users from "./users"
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";

export default async function Page() {

   const session: any = await getServerSession(authOptions)

   let token = await useServerToken();
   const request = await useAxios(token);
 
   let response  = await request({
         method: "get",
         path: `/user/find/all`,
      })
   
   return (
      <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
         <Users userData={response.data} user={session?.user?.user} />
      </div>
   )
}
