import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./Servise/API";


export function MovieDetalis (){

const [moviedetails, setMoviedetails] = useState([]);
    
    const params = useParams()
  const id = params?.movieId;

    useEffect(()=>{
        async function getDetalis(){
            try{
                const results = await fetchMovieDetails(id)
                setMoviedetails(results)
                console.log(results);
            }catch(error) {
                console.log(error)
        }
    
}
getDetalis()
},[id])

return(
    <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${moviedetails.poster_path}`} alt={moviedetails.title} />
        </div>
    </div>
)

}