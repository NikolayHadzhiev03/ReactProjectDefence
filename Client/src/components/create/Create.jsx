export default function CreateGame(){
    return(
        <>
  <section id="create-page" class="auth">
<form id="create">
  <div class="container">
    <h1>Create Game</h1>

    <label for="title">Legendary Title:</label>
    <input
      type="text"
      id="title"
      name="title"
      placeholder="Enter game title..."
      required
    />

    <label for="category">Category:</label>
    <input
      type="text"
      id="category"
      name="category"
      placeholder="Enter game category..."
      required
    />

    <label for="imageUrl">Image URL:</label>
    <input
      type="text"
      id="imageUrl"
      name="imageUrl"
      placeholder="Enter image URL..."
      required
    />

    <label for="create-summary">Summary:</label>
    <textarea
      name="summary"
      id="create-summary"
      placeholder="Enter game summary..."
      required
    ></textarea>

    <input class="btn submit" type="submit" value="Create Game" />
  </div>
</form>
    </section>

</>

    );
}