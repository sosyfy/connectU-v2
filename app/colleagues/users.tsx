"use client"
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react'
import { useEffect } from 'react';

import useAxios from '@/lib/hooks/useAxios';
import useClientToken from '@/lib/hooks/useClientToken';
import ConnectionCard from '@/components/core/connection-card';
import { useSession } from 'next-auth/react';

type UserProps ={
    userData: User[] | Promise<User[]> | any,
    user: User | Promise<User> | any
}

export default function Users({ userData, user }: UserProps) {
    const [users , setUsers] = useState<User[] | Promise<User[]> | any >(userData);
    const [loggedInUser , setLoggedInUser] = useState<User | Promise<User> | any >(user);
   
 

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        { users?.map((user: User)=>(
            <div key={user._id}>
                <ConnectionCard cardData={user} loggedInUser={loggedInUser} />
            </div>
        ))}
    </div>
  )
}
