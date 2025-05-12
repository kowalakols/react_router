import { NavLink } from "react-router"
import './navbar.css'

export default function Navbar(){
  return (
    <header>
      <div className='brand-logo'>
        <NavLink to="/">🚀</NavLink>
      </div>
      <nav className="functions">
        <NavLink to="/activities">activities</NavLink>
        <NavLink to="/activities/new">create activity</NavLink>
      </nav>
      <nav className="authentication">
        <NavLink to="/register">create an account</NavLink>
        <NavLink to="/login">login</NavLink>
      </nav>
    </header>
  )
}