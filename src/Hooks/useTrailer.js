import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer=(movieId)=>{
    const dispatch= useDispatch();
    const trailer=useSelector(store=>store.movies?.trailer)
    const getMovieDetails= async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json=await data.json();
        const filteredList=json.results.filter(video=>video?.type==="Trailer" );
        const trailer=filteredList.length?filteredList[0]:json.results[0];
        // console.log(trailer);
        dispatch(addTrailer(trailer));


}

useEffect(()=>{
   !trailer && getMovieDetails();
},[])
}

export default useTrailer;