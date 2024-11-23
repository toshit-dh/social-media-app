import Image from 'next/image'
import React from 'react'

export default function Comments() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image src="/albums.png" alt="userimage" width={32} height={32} className="w-8 h-8 rounded-full"/>
        <div className="flex flex-1 items-center justify-between w-full bg-slate-100 rounded-xl px-6 py-2 text-sm">
          <input type='text' placeholder='Wwrite a comment...' className='bg-transparent outline-none'/>
          <Image src="/emoji.png" alt="userimage" width={16} height={16} className="cursor-pointer"/>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}
