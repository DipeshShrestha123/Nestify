import React, { useState } from "react";
import "./chat.scss";

import MessageBox from './MessageBox';
import ChattingSec from "../chattingSection/ChattingSec";

function Chat({ isChatVisible , setIsChatVisible }) {
  return (
    <div className="Chat-Container">
      <div className="Message-Notif-Sec">
        <span className="Message-Sec-Title">Messages</span>
        <div className="Message-Notif-Sec-Cont">
          <MessageBox message = {`hello Sir/Ma'am`}/>
          <MessageBox message = {`hello this side dipesh shrestha looking for the job`}/>
          <MessageBox message = {`Student of Galgotias University currently pursuing BTech CSE`}/>
          <MessageBox message = {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor asperiores, vero error atque quos impedit laboriosam, nam, ullam omnis itaque. Quam dolore iure vel sed tempore enim tempora quisquam?`}/>
        </div>
      </div>
      <ChattingSec isChatVisible = {isChatVisible} setIsChatVisible = { setIsChatVisible }/>
   
    </div>
  );
}

export default Chat;
