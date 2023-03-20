import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "./Loder"
import { fetchMovieReviews } from "./Servise/API"


export const Reviews = ()=>{
    const[cast,setCast]=useState([])
    const [isloding,setIsloding]= useState(false)
    const params = useParams()
    const id = params?.movieId;

   
    

    useEffect(()=>{

        async function getReviews(){
            try{
               setIsloding(true) 
               const response = await fetchMovieReviews(id)
               setCast(response.results)
              
                
            }catch(error) {
                console.log(error)
        }finally{
            setIsloding(false)
        }
    }
    getReviews()
},[id])



    return(
        <> 
        {cast.length === 0 && !isloding ? (
        <h3>Review not found!</h3>
      ) : (
        <ul>
          {cast.map(review => {
            return (
              <li key={review.id}>
                
                
                  <div>
                    <p>
                      <b>Name:</b> {review.author_details.name}
                    </p>
                    <p>
                      <b>Username:</b> {review.author_details.username}
                    </p>
                    <p>
                      <b>Rating:</b> {review.author_details.rating}
                    </p>
                  
                  <p>
                    <b>Overview:</b> {review.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>)}

    <Loader isloding={isloding}/></>
       
    )
}