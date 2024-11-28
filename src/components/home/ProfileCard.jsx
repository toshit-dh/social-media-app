import Image from 'next/image'
import React from 'react'

export default function ProfileCard() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-2"'>
      <div className="h-20 relative">
        <Image src="/albums.png" alt='cover photo' fill className='rounded-md object-cover'/>
        <Image src="/lists.png" alt='profile photo' width={48} height={48} className='rounded-full h-12 w-12 absolute left-0 right-0 -bottom-6 m-auto ring-1 ring-white z-10'/>
      </div>
      <div className="flex flex-col h-20 items-center gap-2">
        <span className='font-semibold'>Toshit Hole</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image src="/lists.png" width={12} height={12} className='rounded-full w-3 h-3 object-cover'/>
                <Image src="/lists.png" width={12} height={12} className='rounded-full w-3 h-3 object-cover'/>
                <Image src="/lists.png" width={12} height={12} className='rounded-full w-3 h-3 object-cover'/>
            </div>
            <span className='text-xs text-gray-500'>500 Followers</span>
        </div>
        <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
      </div>
    </div>
  )
}
