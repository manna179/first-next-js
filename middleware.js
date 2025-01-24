
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from 'next/server'
 

export async function middleware(request) {
  const {getUser}= getKindeServerSession()
  const user = await getUser();
  console.log(user);
  if(!user?.email){
    return NextResponse.redirect(new URL('/signIn', request.url))
  }else{
    return NextResponse.next()
  }
    
}
 
export const config = {
  matcher: '/post/:path*',
}