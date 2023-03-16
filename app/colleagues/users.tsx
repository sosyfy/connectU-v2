"use client"
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react'
import { useEffect } from 'react';

import useAxios from '@/lib/hooks/useAxios';
import useClientToken from '@/lib/hooks/useClientToken';
import ConnectionCard from '@/components/core/connection-card';
import { useSession } from 'next-auth/react';

export default function Users() {
    const [users , setUsers] = useState<User[] | Promise<User[]> | any >([]);
    const [loggedInUser , setLoggedInUser] = useState<User | Promise<User> | any >([]);
    const {data } : any  = useSession()

   
    
    let token = useClientToken();
    const request = useAxios(token);

    useEffect(()=>{
        if( token !== undefined ){
            request({
                method: "get",
                path: `/user/find/all`,
            }).then((response) => {
                    setUsers(response.data);
                }).catch((error) => {
                    console.log(error);
          
                });
        }
       
    },[])

    useEffect(()=>{
        if (data !== undefined) {
             setLoggedInUser( data?.user?.user)
        }   
    },[data])

   
 
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
