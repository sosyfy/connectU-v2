import Users from "./users"

export default async function Page() {
  return (
     <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
        <Users />
     </div>
  )
}
