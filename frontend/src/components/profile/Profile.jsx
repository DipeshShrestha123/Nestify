import { useState, useEffect } from "react";
import "./Profile.scss"
import axios from "axios";
import { userdata } from "../../lib/listdata";
import ListCard from '../card/ListCard';
import Chat from '../chat/Chat';
import FormContainer from '../form/FormContainer';
import { useChat } from "../utils/ChatContext";
import { useFormVisibility } from '../utils/FormContext';
function Profile() {
  const { formType, openForm } = useFormVisibility();
  const { setIsChatVisible } = useChat();
  const [ data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const handleUpdatePofileBtnClick = () => {
  //   setFormType("updateProfile");
  // }
  // const handleAddPostBtnClick = () => {
  //     setFormType("addPost");
  // }

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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Item not found</div>;

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
            <span>Avatar: <img src={userdata[0].UserImg} alt="userImg" /> </span>
            <span>Username: <b>{userdata[0].UserName}</b></span>
            <span>E-mail: <b>{userdata[0].Email}</b></span>
          </div>

          <div className="My-List">
            <span>My List</span>
            <button  onClick={() => openForm('addPost')}>Add New Post</button>
          </div>
          <div className="My-Listing">
            {data.map((item) => (
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
