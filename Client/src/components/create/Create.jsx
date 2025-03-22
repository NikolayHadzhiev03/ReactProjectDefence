import { useNavigate } from "react-router";
import { useCreateGame } from "../../api/gameapi";
export default function CreateGame(){
  const navigate = useNavigate();
 const {create :creatGame} = useCreateGame();

    const onCreate = async (formData) => {
        const game = Object.fromEntries(formData);

        await creatGame(game);

        navigate('/');
    }




    return(
      <>
      &lt;&gt;
      <section id="create-page" className="auth">
        <form id="create" action={onCreate}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="title">Legendary Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
              required=""
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
              required=""
            />
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter image URL..."
              required=""
            />
            <label htmlFor="create-summary">Summary:</label>
            <textarea
              name="summary"
              id="create-summary"
              placeholder="Enter game summary..."
              required=""
              defaultValue={""}
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Create Game"
            />
          </div>
        </form>
      </section>
    </>
    
    );
}