import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pokemon">
          <li>Pokemon</li>
        </Link>
        <Link to="/pokemon/new">
          <li>Add New Pokemon</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
