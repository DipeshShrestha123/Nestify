import React, { useState, useEffect } from "react";
import "./Profile.scss"
import axios from "axios";
import { userdata } from "../../lib/listdata";
import ListCard from '../card/ListCard';
import Chat from '../chat/Chat';
function Profile() {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [ data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await axios.get("http://localhost:8080/listdata", {
                    withCredentials: true,
                  });   
                  setLoading(true);
                  setData(response.data);
              } catch (err) {
                console.error("Error While Fetching Data", err);
              } finally {
                  setLoading(false);
              }
          };
          fetchData();
      });
      if (loading) return <div>Loading...</div>;
      
      if (!data) return <div>Item not found</div>;

  return (
    <div className="Profile-Page">
      <div className="Details">
        <div className="Wrapper">
          <div className="Title">
            <p>User Information</p>
            <button>Update Profile</button>
          </div>

          <div className="About-User">
            <span>Avatar: <img src={userdata[0].UserImg} alt="userImg" /> </span>
            <span>Username: <b>{userdata[0].UserName}</b></span>
            <span>E-mail: <b>{userdata[0].Email}</b></span>
          </div>

          <div className="My-List">
            <span>My List</span>
            <button>Add New Post</button>
          </div>
          <div className="My-Listing">
          {
            data.map((item)=>(
            <ListCard key={item._id} item = {item} setIsChatVisible={setIsChatVisible}/>
            ))
          }
          </div>
        </div>
      </div>
      <div className="Chat-Cont">
        <Chat isChatVisible={isChatVisible} setIsChatVisible={setIsChatVisible}/>
      </div>
    </div>
  )
}

export default Profile