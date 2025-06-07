import { useState, useEffect } from "react";
import "./Profile.scss";
import axios from "axios";
import ListCard from '../card/ListCard';
import Chat from '../chat/Chat';
import FormContainer from '../form/FormContainer';
import { useChat } from "../utils/ChatContext";
import { useFormVisibility } from '../utils/FormContext';

function Profile() {
  const { formType, openForm } = useFormVisibility();
  const { setIsChatVisible } = useChat();

  const [listData, setListData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch listings
  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/listdata", {
          withCredentials: true,
        });
        setListData(response.data);
      } catch (err) {
        console.error("Error while fetching listings", err);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/me", {
          withCredentials: true,
        }); 
        setUserData(response.data);
      } catch (err) {
        console.error("Error while fetching user data", err);
      }
    };

    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([fetchListData(), fetchUserData()]);
      setLoading(false);
    };

    fetchAll();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!userData) return <div>User not found</div>;

  return (
    <div className="Profile-Page">
      <div className="formCont">
        {formType && <FormContainer formType={formType} />}
      </div>

      <div className="Details">
        <div className="Wrapper">
          <div className="Title">
            <p>User Information</p>
            <button onClick={() => openForm('updateProfile')}> Update Profile</button>
          </div>

          <div className="About-User">
            <span>Avatar: <img src={userData.image || "/avatar.jpeg"} alt="userImg" /></span>
            <span>Username: <b>{userData.username}</b></span>
            <span>E-mail: <b>{userData.email}</b></span>
          </div>

          <div className="My-List">
            <span>My List</span>
            <button onClick={() => openForm('addPost')}>Add New Post</button>
          </div>

          <div className="My-Listing">
            {listData.map((item) => (
              <ListCard key={item._id} item={item} setIsChatVisible={setIsChatVisible} />
            ))}
          </div>
        </div>
      </div>

      <div className="Chat-Cont">
        <Chat />
      </div>
    </div>
  );
}

export default Profile;
