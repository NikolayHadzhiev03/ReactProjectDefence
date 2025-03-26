import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { isAuthenticated } = useAuth(); 
  const {username } = useAuth();
  return (
    <header>
      <nav>
        <h1>
          <Link to="/" className="logo">
            Games
          </Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/catalog">All Games</Link>
          </li>
          <li>
                <Link to="/search">Search</Link>
              </li>
          {isAuthenticated ? (
            <div className="user-links">
              <li>
                <Link to="/create">Create Game</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/profile">{username}'s profile</Link>
              </li>
            </div>
          ) : (
            <div className="guest-links">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
