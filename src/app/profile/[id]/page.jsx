import Feed from '@/components/home/Feed'
import LeftMenu from '@/components/home/LeftMenu'
import RightMenu from '@/components/home/RightMenu'
import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className="flex gap-6 p-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full h-64 relative">
                <Image src="/lists.png" alt='cover photo' fill className='rounded-md object-cover'/>
                <Image src="/lists.png" alt='cover photo' width={128} height={128} className='w-32 h-32 -bottom-16 rounded-full m-auto left-0 right-0 ring-4 ring-white object-cover absolute'/>
              </div>
              <h1 className='text-2xl mt-20 mb-4 font-medium'>Toshit Hole</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className='font-medium'>123</span>
                  <span className='text-sm'>Postsw</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="test"/>
        </div>
      </div>
  )
}
