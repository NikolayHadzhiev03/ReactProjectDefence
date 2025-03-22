import { useGames } from "../../api/gameapi";
import { Link } from "react-router"; 

export default function Catalog() {
  const {games} = useGames();



  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0 ? (
        games.map((game) => (
          <div className="allGames" key={game.id}>
            <div className="allGames-info">
              <img src={game.imageUrl} alt={game.title} />
              <h6>{game.title}</h6>
              <h2>{game.category}</h2>
              <Link to={`/games/${game.id}`} className="details-button">
                Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h3 className="no-articles">No games available</h3>
      )}
    </section>
  );
}
