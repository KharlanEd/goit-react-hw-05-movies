import { Searchbar } from "components/Searchbar";
import { fetchSearchMovies } from "components/Servise/API";
import { TrendGalery } from "components/TrendGalery";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



const Movies =()=>{
const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    fetchSearchMovies(query).then(({ results }) => {      
        setMovies(results)});
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    if(query === ''){
      return  alert('Введіть значення')
    }
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

        
     
    return (
        <>
        <Searchbar 
        onSubmit={handleSubmit}
        onChange={handleChange}
        />

      <TrendGalery movies={movies}/> 
        </>
       
    )
}

export default Movies;