import { Link } from "react-router-dom"


export const LstistTrends =({trend}) =>{

    return(
        <div>
        <Link key={trend.id}
        to={`/movies/${trend.id}`}
        >
            
            {trend.original_title}
        </Link>
        </div>
    )
}