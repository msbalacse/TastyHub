import React, { useContext } from "react";
import "./Profile.css";
import { FcGoogle } from "react-icons/fc";
import { GoogleContext } from "../../context/googleContext";

const Profile = () => {
  const { handleSignIn, handleSignout, isAuth, auth } =
    useContext(GoogleContext);
  if (isAuth) {
    const { displayName, email, photoURL } = auth.currentUser;
    return (
      <div className="user">
        <div className="user__profile">
          <img src={photoURL} alt={displayName} />
          <h1>{displayName}</h1>
          <p>{email}</p>
          <div className="signout__btn" onClick={handleSignout}>
            <FcGoogle size={"20px"} /> <p className="text-sm">Logout</p>
          </div>
        </div>
        <div className="header">
          <h1>Your Orders</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="general" onClick={handleSignIn}>
        <FcGoogle size={"25px"} /> <p>Google SignIn</p>
      </div>
    );
  }
};

export default Profile;
