// import { getGenres } from "components/utils/GetGeners";
import { Loader } from "components/Loder";
import { MovieInfo } from "components/MovieInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../components/Servise/API";
import css from '../components/styles.module.css'


function MovieDetalis (){

const [movie, setMovie] = useState([]);
const [isloding,setIsloding]= useState(false)
    
const params = useParams()
const id = params?.movieId;

    useEffect(()=>{
       
        async function getDetalis(){
            try{
                setIsloding(true)
                const results = await fetchMovieDetails(id)
                setMovie(results)
                
            }catch(error) {
                console.log(error)
        } finally{
            setIsloding(false)
        }
    
}
getDetalis()
},[id])

return(
    <div className={css.container} >
        <MovieInfo movieInfo={movie } />
        <Loader isloding={isloding}/>
    </div>
)

}

export default MovieDetalis;