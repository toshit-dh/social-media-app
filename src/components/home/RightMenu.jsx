import React from 'react'
import FriendRequest from './FriendRequest'
import Birthdays from './Birthdays'
import Advertisements from './Advertisements'

export default function RightMenu({userId}) {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest/>
      <Birthdays/>
      <Advertisements/>
    </div>
  )
}
