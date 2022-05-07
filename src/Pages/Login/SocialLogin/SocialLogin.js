import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {  useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/Logo/google.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // error message
  let errorElement;

//   loading
if (loading){
    return<Loading></Loading>
}

  if (error) {
    errorElement=<div>
      <p className='text-danger'>Error: {error?.message}</p>
    </div>
}



if(user){
    navigate (from, {replace: true});
}
    
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      {/* set button */}
      <button
        onClick={()=> signInWithGoogle()}
        className="btn btn-light w-50 d-block mx-auto"
      >
        <img style={{ width: "30px" }} src={google} alt="" />
        oogle Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
