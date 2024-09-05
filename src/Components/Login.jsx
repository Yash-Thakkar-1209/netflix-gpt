import React, { useRef, useState } from "react";
import Header from "./Header";
import BackGround_Img from "../Images/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  const handleBtnClick = () => {
    let message;

    if (signInForm) {
      // Sign-in: only validate email and password
      message = checkValidData(email.current.value, password.current.value);
    } else {
      // Sign-up: validate email, password, and name
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }

    setErrorMessage(message);

    if (message) return;

    if (signInForm) {
      // Sign In with Firebase API
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign Up with Firebase API
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = auth.currentUser;
          // Update the user profile with the display name
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/126601711?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            
            })
            .catch((error) => {
              console.log("Error updating profile:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BackGround_Img} alt="" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"  onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4"> {signInForm ? "Sign In" : "Sign Up"} </h1>

        {!signInForm && ( <input type="text" placeholder="First Name" className="p-4 my-4 w-full bg-slate-600 rounded-lg" ref={name} /> )}

        <input type="text" placeholder="Email-Address"className="p-4 my-4 w-full bg-slate-600 rounded-lg" ref={email}
        />

        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-600 rounded-lg" ref={password} />

        <p className="text-red-500">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleBtnClick} > {signInForm ? "Sign In" : "Sign Up"} </button>

        <p className="py-4 cursor-pointer" onClick={() => setSignInForm(!signInForm)} >
          {signInForm ? "New to Netflix? Sign Up Now!" : "Already Registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
