import React from "react";
import "./Profile.css";
import { GrGoogle } from "react-icons/gr";
import { useAuth } from "../../Hooks/useAuth";
import Title from "../Title/Title";

const Profile = () => {
  const { handleSignIn, handleSignout, isAuth } = useAuth();
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const photoURL = localStorage.getItem("user_profile");
  if (isAuth) {
    return (
      <div className="user">
        <div className="user__profile">
          <img src={photoURL} alt={username} />
          <h1>{username}</h1>
          <p>{email}</p>
          <div className="signout__btn" onClick={handleSignout}>
            <GrGoogle size={"20px"} /> <p className="text-sm">Logout</p>
          </div>
        </div>
        <Title data={"Your Orders"} />
      </div>
    );
  } else {
    return (
      <div className="general" onClick={handleSignIn}>
        <p>
          <GrGoogle size={"25px"} />
        </p>
        <p className="mt-[2px]">SignIn</p>
      </div>
    );
  }
};

export default Profile;
