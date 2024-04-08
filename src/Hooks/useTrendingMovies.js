import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

const useTrendingMovies=()=>{

    const dispatch=useDispatch();
    const TrendingMovies=useSelector(store=>store.movies?.trendingMovies)
    const trendingMovies= async()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)

       const json= await data.json()
    //    console.log(json.results);
       dispatch(addTrendingMovies(json.results))
    }

    useEffect(()=>{
      !TrendingMovies && trendingMovies();
    },[])
}

export default useTrendingMovies;