import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass=({isActive})=>(isActive ? "active":undefined);
  return (
    <div>
      <nav>
        <NavLink className={activeClass} to="/">
          Home
        </NavLink>
        <NavLink className={activeClass} to="/pokemones">
          Pokemones
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
