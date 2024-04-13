import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const MovieList=({title, movieType})=>{
    const [initialMovieList, setInitialMovieList]=useState(null);
    useEffect(()=>{
        movieType && setInitialMovieList(movieType.slice(0,9));

    },[movieType])
    
    if(!initialMovieList) return;
       

      const rightClickHandler=()=>{
          let lastIntialIndex=movieType.indexOf(initialMovieList[initialMovieList.length-1]);
          let nextIndexForSetInitial=lastIntialIndex+9;
          if(movieType.length>nextIndexForSetInitial){
            setInitialMovieList(movieType.slice(lastIntialIndex,nextIndexForSetInitial))

          }else{
            console.log(lastIntialIndex,nextIndexForSetInitial);
            
            let newMovieType=[...movieType.slice(-4),...movieType];
            setInitialMovieList(newMovieType.slice(0,9));
          }

      }
      const leftClickHandler=()=>{

        let lastIntialIndex=movieType.indexOf(initialMovieList[initialMovieList.length-1]);
        let nextIndexForSetInitial=lastIntialIndex+9;
        if(movieType.length>nextIndexForSetInitial){
          setInitialMovieList(movieType.slice(lastIntialIndex,nextIndexForSetInitial))

        }else{
          console.log(lastIntialIndex,nextIndexForSetInitial);
          
          let newMovieType=[...movieType.slice(-4),...movieType];
          setInitialMovieList(newMovieType.slice(0,9));
        }
      }

    return (<div  >
        <div className=" flex justify-between">
         <h1 className=" font-serif text-xl md:text-2xl py-4 px-2">{title}</h1>
         <div className=" mt-4">
            <button onClick={leftClickHandler} className=" bg-white  mr-5 w-10 h-10"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkEXE2xHfmLn7D-BfZHJ6MzfX-8zsRvmKd17FoSbX_A&s" alt=" arrow left"/></button>
            <button onClick={rightClickHandler} className=" bg-white w-10 h-10"> <img src="https://www.svgrepo.com/show/108809/right-arrow.svg" alt=" arrow right"/></button>
         </div>
         </div>
      
        <div className=" flex overflow-x-scroll no-scrollbar ">
           <div className=" flex"> {
           initialMovieList.map(movie=>  <Link to={"/browse/"+ movie.id}  key={movie.id}> <MovieCard poster={movie?.poster_path}/> </Link>)
            }
            </div>
        </div>
    </div>)
}

export default MovieList;