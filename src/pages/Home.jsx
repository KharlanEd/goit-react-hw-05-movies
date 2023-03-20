import { Loader } from "components/Loder";
import { fetchTrendingMovies} from "components/Servise/API";
import { useEffect, useState } from "react";
import{TrendGalery} from '../components/TrendGalery'

function  Home() {

const [movies,setMovies] = useState([])
const [isloading, setIsloding] = useState(false);


    useEffect (()=>{

        async function getTrend(){
            try{
                setIsloding(true)
                const {results} = await fetchTrendingMovies()
                setMovies(results)
            }catch(error) {
                console.log(error)
        }finally{
            setIsloding(false)
        }
}
getTrend()

},[])


return(
    <>  
    <h2>Trending today</h2>
    <TrendGalery
        movies={movies}
    />
    <Loader isloding={isloading}/>
    </>
  
)


}

export default Home;