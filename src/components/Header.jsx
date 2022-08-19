import { Link } from 'react-router-dom'


function Header() {
  return (
    <nav className="teal darken-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Movies
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
