import { POSTER_CDN } from "../utils/Constants";


const MovieCard=({poster})=>{


    if(!poster) return null;
    
     
    return (<div  className=" w-28 md:w-44 mr-2">
    <img className=" hover:-mt-2" alt="MoviePoster" src={ POSTER_CDN+poster}/>
    </div>)
};

export default MovieCard;