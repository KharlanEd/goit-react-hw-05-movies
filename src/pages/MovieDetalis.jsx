// import { getGenres } from "components/utils/GetGeners";
import { MovieInfo } from "components/MovieInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../components/Servise/API";
import css from '../components/styles.module.css'


export function MovieDetalis (){

const [movie, setMovie] = useState([]);
    
    const params = useParams()
  const id = params?.movieId;

    useEffect(()=>{
        async function getDetalis(){
            try{
                const results = await fetchMovieDetails(id)
                setMovie(results)
                console.log(results);
            }catch(error) {
                console.log(error)
        }
    
}
getDetalis()
},[id])

return(
    <div className={css.container} >
        <MovieInfo movieInfo={movie } />
    </div>
)

}