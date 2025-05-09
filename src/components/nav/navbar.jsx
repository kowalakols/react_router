import { NavLink } from "react-router"
import './navbar.css'

export default function Navbar(){
  return (
    <header>
      <div className='brand-logo'>
        <NavLink to="/">🚀</NavLink>
      </div>
      <nav>
        <NavLink to="/activities">activities</NavLink>
        <NavLink to="/activities/new">create activity</NavLink>
      </nav>
    </header>
  )
}