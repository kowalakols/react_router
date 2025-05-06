import { NavLink } from "react-router"
import './Navbar.css'

export default function Navbar(){
  return (
    <header>
      <div className='brand-logo'>
        🚀
      </div>
      <nav>
        <NavLink to="/profiles">Profiles</NavLink>
      </nav>
    </header>
  )
}