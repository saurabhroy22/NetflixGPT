import MovieCard from "./MovieCard";

const MovieList=({title, movieType})=>{

    if(!movieType) return;
    // console.log(nowPlaying);


    return (<div >
         <h1 className=" font-serif text-xl md:text-2xl py-4 px-2">{title}</h1>
      
        <div className=" flex overflow-x-scroll no-scrollbar ">
           <div className=" flex"> {
                movieType.map(movie=><MovieCard key={movie.id} poster={movie?.poster_path}/>)
            }
            </div>
        </div>
    </div>)
}

export default MovieList;