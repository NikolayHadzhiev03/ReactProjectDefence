export default function Header(){
    return (
        <header>
  <nav>
    <h1>
      <a href="/" className="logo">
        GamingClub
      </a>
    </h1>
    <ul className="nav-links">
      <li>
        <a href="/catalog">All Games</a>
      </li>
      {/* Logged-in users */}
      <div className="user-links">
        <li>
          <a href="/create-game">Create Game</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </div>
      {/* Guest users */}
      <div className="guest-links">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </div>
    </ul>
  </nav>
</header>

    )
}