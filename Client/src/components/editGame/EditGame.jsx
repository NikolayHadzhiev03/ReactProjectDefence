import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useCurrentGame, useEditGame } from "../../api/gameapi";
import { Navigate } from "react-router";

export default function EditGame(){

  const { userId} = useAuth();
  const {gameId} = useParams();
  const  {game} = useCurrentGame(gameId);
  const {edit} = useEditGame();

  const onEdit = async (formData)=>{
  const  gameData = Object.fromEntries(formData);
    
    await edit(gameId, gameData);
    Navigate(`/catalog/${game._id}`);
  }
  
    return (
<section id="edit-page" className="auth">
  <form id="edit" action={onEdit}>
    <div className="container">
      <h1>Edit Game</h1>
      <label htmlFor="edit-title">Legendary Title:</label>
      <input
        type="text"
        id="edit-title"
        name="title"
        defaultValue={game.title}
        required=""
      />
      <label htmlFor="edit-category">Category:</label>
      <input
        type="text"
        id="edit-category"
        name="category"
        defaultValue={game.category}
        required=""
      />
      <label htmlFor="edit-imageUrl">Image URL:</label>
      <input
        type="text"
        id="edit-imageUrl"
        name="imageUrl"
        defaultValue={game.imageUrl}
        required=""
      />
      <label htmlFor="edit-summary">Summary:</label>
      <textarea
        name="summary"
        id="edit-summary"
        placeholder="Edit game summary..."
        required=""
        defaultValue={game.summary}
      />
      <input className="btn submit" type="submit" defaultValue="Edit Game" />
    </div>
  </form>
</section>

    );
}