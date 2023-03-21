import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";
import css from '../components/styles.module.css'

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

export const Layout =()=> {



    return(
<>
        <header >
        <ul className={css.header_list}>
          <li> 
            <StyledLink className={css.header_link} to='/'>Home</StyledLink>
          </li>
          <li>
             <StyledLink className={css.header_link} to='/movies'>Movies</StyledLink>
          </li>
       
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
             <Outlet/>
        </Suspense>
        
      </main>

      </>
    )
    

}