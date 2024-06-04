import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css'
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext)

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
            <button onClick={logout}>Sair</button>
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
