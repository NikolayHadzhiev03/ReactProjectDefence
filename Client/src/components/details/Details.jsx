import { Navigate, useParams, Link } from "react-router";
import { useCurrentGame } from "../../api/gameapi";
import useAuth from "../../hooks/useAuth";


export default function Details(){
  const  {username , userId} = useAuth();
   const {gameId} = useParams();
   const  {game}  = useCurrentGame(gameId);

  

  if (!game) return <p>Loading or game not found...</p>;
    return (
        <section id="game-details">
  <h1>Game Details</h1>
  <div className="info-section">
    <div className="game-header">
      <img className="game-img" src={game.imageUrl} />
      <h1>{game.title}</h1>
      <p className="type">{game.category}</p>
    </div>
    <p className="text">
      {game.summary}
    </p>

    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>

        <li className="comment">
          <p>Content: I rate this one quite highly.</p>
        </li>
        <li className="comment">
          <p>Content: The best game.</p>
        </li>
      </ul>

      <p className="no-comment">No comments.</p>
    </div>
      
    {game._ownerId === userId && (
          <div className="buttons">
            <Link to={`/edit/${gameId}`} className="button">
              Edit
            </Link>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        )}
  </div>

  <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form">
      <textarea name="comment" placeholder="Comment......" defaultValue={""} />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
</section>

    );
}