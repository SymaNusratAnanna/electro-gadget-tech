import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import google from '../../../images/Logo/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='d-flex align-items-center'>
                
               <div style={{height:'1px'}} className='bg-primary w-50'></div>
               <p className='mt-2 px-2'>or</p>
               <div style={{height:'1px'}} className='bg-primary w-50'></div>
                
            </div>
              {/* set button */}
              <button 
            //onClick={()=> signInWithGoogle()}
            className='btn btn-light w-50 d-block mx-auto'>
                <img style={{width: '30px'}} src={google} alt="" />
                oogle Sign In
            </button>
        </div>
    );
};

export default SocialLogin;