
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const {getUser} = getKindeServerSession();
const user = await getUser();

console.log(user);
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard =async () => {
  const  {getUser}=getKindeServerSession()
  const user= await getUser()
  if(!user) return redirect('/signIn')
  return (
    <div className="min-h-screen">
        <h2>hello {user.given_name} {user.family_name}</h2>


    </div>
    
  )
}

export default Dashboard