import { useState } from "react";
import { useGames } from "../../api/gameapi";
import { Link } from "react-router";


export default function Search() {

    const [searchTerm, setSearchTerm] = useState("");
  const {games} = useGames(); 


  if(games.code === 404){
    return <p className="no-results">No games found.</p>
  }
 
  const filteredGames = games?.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];
  
 
 
  return (
    <section id="search-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="games-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div key={game._id} className="game-card">
              <img src={game.imageUrl} alt={game.title} className="game-image" />
              <h1>{game.title}</h1>
              <p>{game.summary}</p>
              <Link to={`/catalog/${game._id}`} className="btn details-btn">View Details</Link>
            </div>
          ))
        ) : (
          <p className="no-results">No games found.</p>
        )}
      </div>
    </section>
  );
}
