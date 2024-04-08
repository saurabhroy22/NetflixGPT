import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
   const movies=useSelector(store=>store.movies);
   if(!movies) return;
   
 return (<div className="  bg-black">
   <div className=" ml-4 -mt-52 relative z-20 text-white">
   
    <MovieList title="Now Playing Movies" movieType={movies?.nowPlayingMovies} />
    <MovieList title="Top Rated Movies" movieType={movies?.topRatedMovies} />
    <MovieList title="Trending Movies" movieType={movies?.trendingMovies} />
    <MovieList title="Award Winning Movies" movieType={movies?.awardWinningMovies} />
    <MovieList title="Critically Acclaimed Movies" movieType={movies?.topRatedMovies} />

 </div>
 </div>)
}
export default SecondaryContainer;