import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useSelector } from "react-redux";

const useNowPlayingMovies=()=>{
 const dispatch=useDispatch();
 const nowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies)

    const NowPlayingMovie= async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
       const json= await data.json()
    //    console.log(json.results);
       dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
      !nowPlayingMovies && NowPlayingMovie();
    },[])
}

export default useNowPlayingMovies;