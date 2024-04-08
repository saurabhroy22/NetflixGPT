import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_ICON, supported_Language} from "../utils/Constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { searchGPT } from "../utils/gptSlice";
import { chanLanguage } from "../utils/langSlice";



const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
    const gptSearchBtn=useSelector(store=>store.gpt.isSearchGPT);
    
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())}).catch((error) => {
            // An error happened.
          });
          
    }

    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
             //when there is a user present/signed in
            const {uid,email,displayName} = user;
            // dispatching user to the store
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate('/browse')
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/')
          }
        });

        return (()=>unsubscribe)
      },[]);

    const handleGptSearch=()=>{
      dispatch(searchGPT())
    }
    const handleLanguage=(e)=>{
      // console.log(e.target.value);
      dispatch(chanLanguage(e.target.value))
    }
     
    
    return (<div className=" absolute w-full px-16  flex justify-between bg-gradient-to-b from-black z-10">
        <img  className="w-48" src={NETFLIX_LOGO} alt="header_logo"/>
       { user && <div className=" flex">
                  {gptSearchBtn && <select onClick={handleLanguage} className=" bg-purple-500 rounded-lg my-8 mx-2 px-2 py-1">
                              {supported_Language.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
               </select>}
               <button onClick={handleGptSearch}  className=" bg-purple-500 hover:bg-purple-600 rounded-lg my-8 px-2 py-1">{gptSearchBtn?'Home':'GPTSearch'}</button>
            <img className=" w-20 my-2 p-4   " src={USER_ICON} alt="UserIcon"/>
           <button onClick={handleSignOut} className=" bg-red-600 hover:bg-red-700 text-white my-8 px-2 rounded-md"  >Sign Out</button>
        </div>
}
    </div>)
};

export default Header;
