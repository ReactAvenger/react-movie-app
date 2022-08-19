import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer className="page-footer teal darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} React Movies
          <Link className="grey-text text-lighten-4 right" to="/">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
