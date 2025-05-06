import React from 'react'
import "./messagebox.scss"
import { userdata } from "../../lib/listdata";
import { listdata } from "../../lib/listdata";
function MessageBox({message}) {
  return (
    <div className="MessageBox-Cont">
        <img src={userdata[0].UserImg} alt="" />
        <span className='user-name'>{userdata[0].UserName}</span>
        <span className='user-message'>{message}</span>
    </div>
  )
}

export default MessageBox