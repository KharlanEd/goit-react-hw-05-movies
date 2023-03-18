import { fetchTrendingMovies} from "components/Servise/API";
import { useEffect, useState } from "react";
import{TrendGalery} from '../components/TrendGalery'

function  Home() {

const [trends,setTrends] = useState([])



    useEffect (()=>{

        async function getTrend(){
            try{
                const {results} = await fetchTrendingMovies()
                setTrends(results)
            }catch(error) {
                console.log(error)
        }
}
getTrend()

},[])


return(
    <>  
    <h2>Trending today</h2>
    <TrendGalery
        trends={trends}
    /></>
  
)


}

export default Home