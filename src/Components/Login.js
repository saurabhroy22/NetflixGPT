import { useState } from "react";
import { NETFLIX_BACKGROUND } from "../utils/Constants";
import Header from "./Header";

const Login=()=>{
    const [isSignedUp, setIsSignedUp]=useState(true);
    const signupHandler=()=>{
          setIsSignedUp(!isSignedUp);
    }
    return (<div>
        <Header/>

        <div className=" absolute"> 
            <img src={NETFLIX_BACKGROUND} alt="Background_img"/>
        </div>
        <form className=" absolute bg-black w-2/6 my-36 mx-auto right-0 left-0 text-white p-12 opacity-85 rounded-md ">
            <h1 className=" font-bold text-3xl mb-6">{isSignedUp? 'Sign In':'Sign Up'}</h1>
            {isSignedUp || <input className="p-4 my-2 w-full bg-gray-700 rounded-md" type="text" placeholder="Name"/>}
            <input className="p-4 my-2 w-full bg-gray-700 rounded-md" type="text" placeholder="Email address"/>
            <input className="p-4 my-2 w-full bg-slate-700 rounded-md" type="password" placeholder="Password"/>
            <button className=" bg-red-600 w-full p-2 my-2 rounded-md hover:bg-red-500">{isSignedUp?'Sign In':'Sign Up'}</button>
            <p className=" mt-6 px-2 cursor-pointer" onClick={signupHandler}> {isSignedUp?"New to Netflix? Sign up now.": "Already Registered? Sign in now."} </p>
        </form>
    </div>)
};

export default Login;