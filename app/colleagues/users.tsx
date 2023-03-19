

import React, { useState } from 'react'
import { useEffect } from 'react';

import useAxios from '@/lib/hooks/useAxios';
import useClientToken from '@/lib/hooks/useClientToken';
import ConnectionCard from '@/components/core/connection-card';
import { useSession } from 'next-auth/react';

type UserProps ={
    userData: User[] | Promise<User[]> | any,
}

export default function Users({ userData}: UserProps) {
    // const [users , setUsers] = useState<User[] | Promise<User[]> | any >(userData);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        { userData?.map((user: User)=>(
            <div key={user._id}>
                <ConnectionCard cardData={user} />
            </div>
        ))}
    </div>
  )
}
