import {NETFLIX_BACKGROUND} from '../utils/Constants'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchbar from './GptSearchbar';

 const GptSearchPage=()=>{
    return (
    <div >
        <img src={NETFLIX_BACKGROUND} alt='Background_img' className=' fixed -z-10'/>
       <GptSearchbar/>
       <GptMovieSuggestion/>
    </div>)
 }
 export default GptSearchPage;