import { Link, Outlet } from "react-router-dom"
import css from '../components/styles.module.css'



export const MovieInfo = ({
    movieInfo: {
    poster_path,
    original_title,
   
    vote_average,
    overview,
    genres = [],
  }}) => {


    return (
        <>
        
        <div className={css.container}>
        <div className={css.container_text}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} />
       
        <div>
        <h3>{ original_title}</h3>
        <p>User score:{vote_average}</p>
         <h3>Overviem</h3>
        <p>{ overview}</p>
         <h3>Genres</h3>
        <p>{genres.map(gener=>gener.name).join(' | ')}</p>
        </div> 
        </div>
        </div>
       
        <Link to={`cast`}>
                Cast
        </Link>

        <Link to={`reviews`}>
        Reviews
        </Link>
        
      
        <Outlet/>
         </>


       
       
    
       
        
         
)


}



