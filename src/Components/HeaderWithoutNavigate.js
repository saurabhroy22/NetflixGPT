import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import {  removeUser } from "../utils/userSlice";
import {  clearMoviesSlice } from "../utils/moviesSlice";
import { NETFLIX_LOGO } from "../utils/Constants";



const HeaderWithoutNavigate=()=>{
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
    
    
    
    const handleSignOut=()=>{
      dispatch(clearMoviesSlice());

        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())}).catch((error) => {
            // An error happened.
          });
    }

    return (<div className=" absolute w-full px-16  flex flex-col md:flex-row md:justify-between bg-gradient-to-b from-black z-10">
       <img  className=" w-36 md:w-48 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="header_logo"/>
       <button onClick={handleSignOut} className=" bg-red-600 hover:bg-red-700 text-white my-8 px-2 rounded-md"  >Sign Out</button>
        </div>
)
}

export default HeaderWithoutNavigate;
