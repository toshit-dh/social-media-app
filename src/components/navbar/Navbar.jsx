import React from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="">
        <Link className="font-bold text-xl text-orange-500" href="/">Social</Link>
      </div>
      <div className="">

      </div>
      <div className="">
        <MobileMenu/>
      </div>
    </div>
  )
}
