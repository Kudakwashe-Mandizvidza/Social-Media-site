import React from 'react'
import './CloseFriends.css'

export default function closeFriends({user}) {
  return (
    <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.userName}</span>
          </li>
  )
}
