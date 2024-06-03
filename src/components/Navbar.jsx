import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <h2 className="logo">Purchase List</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new">New</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
