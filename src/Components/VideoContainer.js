import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";

const VideoContainer=({movieId})=>{
     useTrailer(movieId);
     const trailer=useSelector(store=>store.movies?.trailer);
     if(!trailer) return;
    //  console.log(trailer);
    return (<div className=" ">
        <iframe 
         className=" w-screen aspect-video"
        src={
            "https://www.youtube.com/embed/"+ trailer.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  >

        </iframe>
    </div>)
}

export default VideoContainer;