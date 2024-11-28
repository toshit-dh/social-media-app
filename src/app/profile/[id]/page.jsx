import Feed from '@/components/home/Feed'
import LeftMenu from '@/components/home/LeftMenu'
import RightMenu from '@/components/home/RightMenu'
import React from 'react'

export default function Profile() {
  return (
    <div className="flex gap-6 p-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="test"/>
        </div>
      </div>
  )
}
