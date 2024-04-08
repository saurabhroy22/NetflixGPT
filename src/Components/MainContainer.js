import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer=()=>{

    const moviesAll=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!moviesAll) return;
    // console.log(moviesAll[0]);
    const mainMovie=moviesAll[0];
    const {title, overview,id}=mainMovie;

    return (<div>
    <VideoTitle title={title} overview={overview}/>
    <VideoContainer movieId={id}/>
    </div>)
}

export default MainContainer;