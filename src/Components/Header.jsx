import React, { useEffect } from "react";
import Logo from "../Images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
 
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // When User is Signed In or Signed Up This part Will be executed
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid:uid, email:email, displayName: displayName, photoURL: photoURL }))   
        navigate("/browse") 
      } else {
        // When User is Signed Out This part Will be executed
        dispatch(removeUser());
        navigate("/")
    }});

    // UnSubscribed onAuthStateChanged API  when Header Component Are Unmounting..
    return () => unSubscribed();

  }, []);

  const handleSignedOut = () => {
    signOut(auth)
      .then(() => {  
      })
      .catch((error) => {
        console.log("Error aa Raha hai");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="" />
      {
        user && <div className="flex p-2 gap-3">
        <img src={user?.photoURL} alt="" className="w-12 h-12" />
        <button
          className="font-bold text-white border border-red-500 px-2"
          onClick={handleSignedOut}
        >
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
