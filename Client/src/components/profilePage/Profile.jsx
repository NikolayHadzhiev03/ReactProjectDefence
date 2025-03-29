import useAuth from "../../hooks/useAuth";
import { useOwnerGames } from "../../api/gameapi";
import {Link} from 'react-router';
export default function Profile() {
  const user = useAuth();
  const { ownerGames} = useOwnerGames();

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-card">
        <div className="profile-image-container">
          <img 
            src="/profilepicture.png"
            alt="Profile" 
            className="profile-image" 
          />
        </div>
        <p><strong>Email:</strong> {user.email}</p>
        <h2>Your Games</h2>
        <div className="allGames">
        {ownerGames.length > 0 ? (
          ownerGames.map((game) => (
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
      </div>
    </div>
  );
}
