import { Link, useLocation } from "react-router-dom"


export const LstistTrends =({trend}) =>{
const location = useLocation()
    return(
        <div>
        <Link
        state= {{from:location}}
        key={trend.id}
        to={`/movies/${trend.id}`}
        >
            
            {trend.original_title}
        </Link>
        </div>
    )
}