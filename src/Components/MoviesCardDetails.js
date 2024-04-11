import { useEffect, useState } from 'react'
import { API_OPTIONS, NETFLIX_BACKGROUND, POSTER_CDN } from '../utils/Constants'
import {useParams} from 'react-router-dom'



const MoviesCardDetails = () => {
        const [movieDetails, setmovieDetails]=useState(null)
        const {movieId}=useParams();
  useEffect(()=>{
    fetchMoviesDetails()
  },[])

  const fetchMoviesDetails=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId, API_OPTIONS)
    const json=await data.json();

    // console.log(json)
    setmovieDetails(json);

  }
  if(!movieDetails) return;
   const {title, poster_path,overview}=movieDetails;
   
  return (
    <div>
    <img className=' fixed -z-10' src={NETFLIX_BACKGROUND} alt='netflixBackgroundImg '/>
    <div className=' flex justify-between ' >
      <img className='  h-screen w-1/2 ' src={POSTER_CDN+poster_path} alt='moviePoster'/>
      <div className=' pl-10 text-white font-serif bg-black opacity-90 '>
        <h1 className=' text-6xl py-6'>{title}</h1>
      <p className=' w-3/4'>{overview}</p>
      <div className=' mt-10'>
            <button className=" bg-white text-black font-serif px-2 md:px-6 py-1 md:py-2 rounded-md mr-4 hover:opacity-80">▶ Play</button>
            <button className=" hidden md:inline-block bg-gray-600 font-serif px-6 py-2 rounded-md text-white hover:opacity-80">More info</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MoviesCardDetails