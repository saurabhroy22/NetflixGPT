import { useDispatch, useSelector } from "react-redux"
import langConstant from "../utils/langConstants"
import { useRef } from "react"
import openai from "../utils/openAI"
import { API_OPTIONS } from "../utils/Constants"
import { addGptMovies } from "../utils/gptSlice"


const GptSearchbar = () => {
  const lang=useSelector(store=>store.language.preferredlanguage)
  const searchText=useRef(null);
  const dispatch=useDispatch();

  const fetcchGptMoviesSuggestion= async (movie)=>{
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)


    const json= await data.json();
    // console.log(json);
    return json.results;

  }
  
  
  const handleGptSearch= async()=>{
    // console.log(searchText.current.value)
    const gptquery='Act as a movie recommadation system and suggest some movies for the query:'+searchText.current.value+'. Only give me 5 movies, comma separated like example resuls ahead. Example: gadar, soni, kartikeya, phool, madari';
       const gptSearchResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptquery }],
        model: 'gpt-3.5-turbo',
      });

      // console.log(gptSearchResults.choices[0].message.content)
      const movieResults=gptSearchResults?.choices?.[0].message?.content.split(',')
      // console.log(movieResults);
       const moviesPromises=movieResults.map(movie=>fetcchGptMoviesSuggestion(movie))
       const tmdbMoviesDetails=  await Promise.all(moviesPromises);

      //  console.log(tmdbMoviesDetails)
       dispatch(addGptMovies({gptMoviesSuggestion:movieResults,gptMoviesDetailsTmdb:tmdbMoviesDetails}))
    
      }
      
  
  
  return (
    <div className=" pt-[20%]">
    <form onSubmit={(e)=>e.preventDefault()} className=" p-4 mx-auto w-1/2 grid grid-cols-12 rounded-md bg-purple-600  " >
     <input ref={searchText}  className=" rounded-lg col-span-9 mx-4 " type="text" placeholder={ langConstant[lang].placeHolder}/>
    <button  onClick={handleGptSearch}  className="bg-red-600 font-serif col-span-3 px-2 py-2 text-white rounded-lg hover:bg-red-700">{langConstant[lang].search}</button>
        </form>
    </div>
  )
}


export default GptSearchbar
