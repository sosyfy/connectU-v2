
import ConnectionCard from '@/components/core/connection-card';

type UserProps ={
    userData: User[] | Promise<User[]> | any,
}

export default function Users({ userData}: UserProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        { userData?.map((user: User)=>(
            <div key={user._id}>
                <ConnectionCard cardData={user} />
            </div>
        ))}
    </div>
  )
}
