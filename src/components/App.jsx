import Home from "pages/Home";
import Movies from "pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";
import css from '../components/styles.module.css'
import { MovieDetalis } from "./MovieDetalis";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <header >
        <ul className={css.header_list}>
          <li> 
            <NavLink className={css.header_link} to='/'>Home</NavLink>
          </li>
          <li>
             <NavLink className={css.header_link} to='/movies'>Movies</NavLink>
          </li>
       

        </ul>
      </header>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetalis/>}>
          {/* <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/> */}
        </Route>
      </Routes>
    </div>
  );
};
