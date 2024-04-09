import { useRef, useState } from "react";
import { NETFLIX_BACKGROUND } from "../utils/Constants";
import Header from "./Header";
import checkValidation from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,   } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login=()=>{
    const [isSignedUp, setIsSignedUp]=useState(true);
    const [isValid, setIsValid]=useState(null);
    const dispatch=useDispatch();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const signupHandler=()=>{
          setIsSignedUp(!isSignedUp);
    }

    const submitHandler=()=>{
        // valdations of email and password
        // console.log(email.current.value, password.current.value)
        const message=checkValidation(email.current.value,password.current.value)
        setIsValid(message)

        if(message) return;

        if(!isSignedUp){
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
             const user = userCredential.user;
            //  console.log(user)
            updateProfile(user, {
              displayName: name.current.value,
            }).then(() => {
              // Profile updated!
              const {uid,email,displayName} = auth.currentUser;
              // dispatching user to the store
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));


              // ...
            }).catch((error) => {
              // An error occurred
              isValid("Not updated")
              // ...
            })}).catch((error) => {
          //    const errorCode = error.code;
        //        const errorMessage = error.message;
               setIsValid('Email and Password do not match.')
             });
         } else{
          //sign In logic
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // const user = userCredential.user;
          
        //   console.log(user);
        }).catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
          
          setIsValid('Email and Password do not match.')
        });

        }
}
    return (<div>
        <Header/>

        <div className=" absolute"> 
            <img className=" h-screen object-cover md:h-auto" src={NETFLIX_BACKGROUND} alt="Background_img"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=" absolute bg-black w-full md:w-2/6 my-36 mx-auto right-0 left-0 text-white p-12 opacity-85 rounded-md ">
            <h1 className=" font-bold text-3xl mb-6">{isSignedUp? 'Sign In':'Sign Up'}</h1>
            {isSignedUp || <input ref={name} className="p-4 my-2 w-full bg-gray-700 rounded-md" type="text" placeholder="Name"/>}
            <input ref={email} className="p-4 my-2 w-full bg-gray-700 rounded-md" type="text" placeholder="Email address"/>
            <input ref={password} className="p-4 my-2 w-full bg-slate-700 rounded-md" type="password" placeholder="Password"/>
            
           {isValid &&  <p className=" text-red-700 py-2 font-bold">{isValid}</p>}

            <button onClick={submitHandler} className=" bg-red-600 w-full p-2 my-2 rounded-md hover:bg-red-500">{isSignedUp?'Sign In':'Sign Up'}</button>
            <p className=" mt-6 px-2 cursor-pointer" onClick={signupHandler}> {isSignedUp?"New to Netflix? Sign up now.": "Already Registered? Sign in now."} </p>
        </form>
    </div>)
};

export default Login;