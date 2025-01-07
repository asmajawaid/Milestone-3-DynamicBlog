import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
        <span className="text-gray-800 font-semibold text-3xl">Coffee<span className="text-yellow-600">Blog</span></span>
          
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold text-dbrown ">
            <li className=" hover:underline hover:text-yellow-600"><Link href="/">Home</Link></li>
            <li className=" hover:underline hover:text-yellow-600"><Link href="/about">About</Link></li>
            <li className=" hover:underline hover:text-yellow-600"><Link href="/moreBlogs">Pages</Link></li>
            <li className=" hover:underline hover:text-yellow-600"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <Image
              className="w-8 h-8 rounded-full"
              src="/images/roundProfile.jpeg"
              alt="logo"
              width={70}
              height={70}
            />
            <p className="text-sm text-dbrown font-medium">Hello Stranger!</p>
          </div>
           <Link href="/signIn">
          <button className="text-dbrown uppercase text-sm border-[1px] border-primaryColor shadow-md hover:border-secondaryColor px-4 py-1 font-semibold hover:text-dbrown rounded-md hover:bg-lPink transition-all duration-300 active:bg-yellow-600 hover:shadow-md">
            Sign In
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
