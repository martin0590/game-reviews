"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
const Navbar =  () => {
  const {data: session} = useSession()

  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-black'
        >
          <span>G</span>ame <span>R</span>evies
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
            <Link href={"/review/create"}>
              <span>Create</span>
            </Link>

            <button onClick={() => signOut({callbackUrl: "/"})}>
              <span>Logout</span>
            </button>

            <Link href={`/user/${session?.user.name}`}>
              <span>{session?.user?.name}</span>
            </Link>
            </>
          ): (
              <button onClick={() => signIn("github")}>
                <span>Login</span>
              </button>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar