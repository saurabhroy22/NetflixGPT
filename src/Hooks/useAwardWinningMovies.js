import { useEffect } from "react";
import { addAwardWinningMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useSelector } from "react-redux";


const useAwardWinningMovies=()=>{

    const dispatch=useDispatch();
    const awardWinningMovies=useSelector(store=>store.movies?.awardWinningMovies)


    const AwardWinningMovies= async()=>{
       const data= await fetch('https://api.themoviedb.org/3/trending/movie/day?', API_OPTIONS)

       const json= await data.json()
    //    console.log(json.results);
       dispatch(addAwardWinningMovies(json.results))
    }

    useEffect(()=>{
      !awardWinningMovies && AwardWinningMovies();
    },[])
}

export default useAwardWinningMovies;