
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useAwardWinningMovies from "../Hooks/useAwardWinningMovies";
import Footer from "./Footer";



const Browse=()=>{
    const gptSearch=useSelector(store=>store.gpt.isSearchGPT);
    useNowPlayingMovies();
    useTrendingMovies();
    useTopRatedMovies();
    useAwardWinningMovies();

    return (<div>
        <Header/>
        {gptSearch?<GptSearchPage/>:<><MainContainer/>
        <SecondaryContainer/>
        <Footer/>
        </>}
        
    
        
       
    </div>)
};

export default Browse;