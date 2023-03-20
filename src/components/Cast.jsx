import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "./Loder"
import { fetchMovieCredits } from "./Servise/API"



const Cast =()=>{

    const[cast,setCast]=useState([])
    const [isloding,setIsloding]= useState(false)
    const params = useParams()
    const id = params?.movieId;


    

    useEffect(()=>{
        async function getCast(){
            try{
               setIsloding(true) 
               const {cast} = await fetchMovieCredits(id)
               setCast(cast)
              
                
            }catch(error) {
                console.log(error)
        }finally{
            setIsloding(false)
        }
    }
    getCast()
},[id])


    return(
        <>  
         <ul>
          {cast.map(actor => {
            return (
              <li key={actor.credit_id}>
                <img width="150px"
                  src={
                    
                       `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                   
                  }
                  alt=""
                />
                <div>
                  <p>
                    <b>Actor:</b> {actor.name}
                  </p>
                  <p>
                    <b>Character:</b> {actor.character}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      
        <Loader isloding={isloding}/>
        </>
       
       
    )
}

export default Cast;