import { LstistTrends } from "./ListTrends";



export function TrendGalery ({movies}) {
   
    return (
        <ul>
          {movies.map(trend=>(
            <LstistTrends
            key={trend.id}
            trend={trend}
            />
          )

          )}

        </ul>
    )
}