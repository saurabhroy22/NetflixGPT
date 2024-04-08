import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const GptMovieSuggestion = () => {
  const gpt=useSelector(store=>store.gpt);
  const {gptMoviesSuggestion, gptMoviesDetailsTmdb}=gpt;
  if(!gptMoviesSuggestion) return;
  return (
    <div className=" mt-4 p-4 text-white bg-black opacity-80">
      {gptMoviesSuggestion.map((movie,index)=><MovieList key={movie} title={movie} movieType={gptMoviesDetailsTmdb[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestion