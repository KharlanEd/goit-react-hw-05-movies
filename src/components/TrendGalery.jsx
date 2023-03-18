import { LstistTrends } from "./ListTrends";



export function TrendGalery ({trends}) {
    console.log(trends);
    return (
        <ul>
          {trends.map(trend=>(
            <LstistTrends
            key={trend.id}
            trend={trend}
            />
          )

          )}

        </ul>
    )
}