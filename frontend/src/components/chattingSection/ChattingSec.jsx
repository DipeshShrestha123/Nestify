import "./ChattingSec.scss"
import React, { useState } from "react";
import { userdata } from "../../lib/listdata";
function ChattingSec({ isChatVisible , setIsChatVisible }) {
    // const [isChatVisible, setIsChatVisible] = useState(true);
    const messages = [
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "ipisicing elit", time: "15:04" },
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "ipisicing elit", time: "15:04" },
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "ipisicing elit", time: "15:04" },
      { type: "receive", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "15:04" },
      { type: "send", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", time: "1:04" },
    ];
  return (
    isChatVisible && (
        <div className="Chatting-Sec">
           <div className="Sender-detail-cont">
             <div className="Sender-detail">
               <img src={userdata[0].UserImg} alt="Sender" />
               <span className="sender-name">{userdata[0].UserName}</span>
             </div>
             <span className="Cross-Btn" onClick={() => setIsChatVisible(false)}>X</span>
           </div>
           <div className="Chatting-Area">
             {messages.map((msg, index) => (
               <div
                 key={index}
                 className={msg.type === "send" ? "sender-msg-cont" : "receive-msg-cont"}
               >
                 <span className={msg.type === "send" ? "sender-msg" : "receive-msg"}>
                   {msg.text}
                 </span>
                 <span className="msg-time">{msg.time}</span>
               </div>
             ))}
           </div>
           <div className="Messaging-area">
            <input type="text" placeholder="Write a Message" />
            <button>
              <img src="/send.png" alt="" />
            </button>
           </div>
         </div>
         )
  )
}

export default ChattingSec