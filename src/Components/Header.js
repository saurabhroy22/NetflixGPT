import { NETFLIX_LOGO } from "../utils/Constants";

const Header=()=>{
    return (<div className=" absolute w-full px-16 py-2 bg-gradient-to-b from-black z-10">
        <img  className="w-48" src={NETFLIX_LOGO} alt="header_logo"/>
    </div>)
};

export default Header;
