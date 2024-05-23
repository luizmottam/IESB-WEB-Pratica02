import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/novo">New</NavLink></li>
          <li><NavLink to="/history">History</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
