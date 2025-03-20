export default function EditGame(){
    return (
<section id="edit-page" className="auth">
  <form id="edit">
    <div className="container">
      <h1>Edit Game</h1>
      <label htmlFor="edit-title">Legendary Title:</label>
      <input
        type="text"
        id="edit-title"
        name="title"
        defaultValue=""
        required=""
      />
      <label htmlFor="edit-category">Category:</label>
      <input
        type="text"
        id="edit-category"
        name="category"
        defaultValue=""
        required=""
      />
      <label htmlFor="edit-imageUrl">Image URL:</label>
      <input
        type="text"
        id="edit-imageUrl"
        name="imageUrl"
        defaultValue=""
        required=""
      />
      <label htmlFor="edit-summary">Summary:</label>
      <textarea
        name="summary"
        id="edit-summary"
        placeholder="Edit game summary..."
        required=""
        defaultValue={""}
      />
      <input className="btn submit" type="submit" defaultValue="Edit Game" />
    </div>
  </form>
</section>

    );
}