import {  LogoutLink, LoginLink, RegisterLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function Navbar() {
  const { user, isAuthenticated } = useKindeAuth();

  return (
    <nav className="bg-gray-200">
      <div className="flex justify-between items-center container mx-auto">
        <Image
          className="h-12 w-12 rounded-full"
          src="/images/images.jpg"
          alt="Logo"
          width={200}
          height={100}
        />
        <ul className="flex gap-8">
        <li>
            <a href="/home">Home</a>
          </li>
         
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {isAuthenticated  ? (
            <>
            
             
              <li>
                <LogoutLink className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600">
                  Logout
                </LogoutLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RegisterLink className="bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-sky-600">
                  Register
                </RegisterLink>
              </li>
              <li>
                <LoginLink className="bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-sky-600">
                  Login
                </LoginLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
