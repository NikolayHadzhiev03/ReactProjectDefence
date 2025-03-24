import { useGames } from "../../api/gameapi";
import { Link } from "react-router"; 

export default function Catalog() {
  const {games} = useGames();



  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      <div className="allGames">
        {games.length > 0 ? (
          games.map((game) => (
            <div className="allGames-info" key={game._id}>
              <img src={game.imageUrl} alt={game.title} />
              <h6>{game.title}</h6>
              <h2>{game.category}</h2>
              <Link to={`/catalog/${game._id}`} className="button">
                Details
              </Link>
            </div>
          ))
        ) : (
          <h3 className="no-articles">No games available</h3>
        )}
      </div>
    </section>
  );
}
