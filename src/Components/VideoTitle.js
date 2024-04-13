import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const VideoTitle=({title, overview})=>{
    const forPlayBtn=useSelector(store=>store.movies.nowPlayingMovies[0].id)

    

    return (<div className=" w-screen aspect-video absolute px-4 md:px-20 pt-[37%] md:pt-[25%] bg-gradient-to-r from-black  text-white ">
        <h1 className=" font-bold text-lg md:text-2xl">{title}</h1>
        <p className=" hidden md:inline-block w-2/4 my-2 font-serif"> {overview}</p>
        <div>
           <Link to={'/browse/'+forPlayBtn}> <button  className=" bg-white text-black font-serif px-2 md:px-6 py-1 md:py-2 rounded-md mr-2 hover:opacity-80">▶ Play</button></Link>
            <button className=" hidden md:inline-block bg-gray-600 font-serif px-6 py-2 rounded-md text-white hover:opacity-80">More info</button>
        </div>
    </div>)
}

export default VideoTitle;