import Image from 'next/image'
import React from 'react'

export default function Stories() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scroll-hide'>
      <div className="flex g-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="/messages.png" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">Toshit</span>
        </div>
      </div>
    </div>
  )
}
