import {NETFLIX_BACKGROUND} from '../utils/Constants'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchbar from './GptSearchbar';

 const GptSearchPage=()=>{
    return (
      <>        
      <img src={NETFLIX_BACKGROUND} alt='Background_img' className=' h-full object-cover md:w-full fixed -z-10'/>
      
      <div className='  '>

       <GptSearchbar/>
       <GptMovieSuggestion/>
    </div>
      </>
    )
 }
 export default GptSearchPage;