export default function Home(){

    return (
<>
<>
  <div className="background-blur" />
  <section id="game-world">
    <div className="welcome-message">
      <h2>Where Legends Are Born</h2>
      <h3>Find Your Next Adventure Here!</h3>
      <button>Check games</button>
    </div>
  </section>
  <section id="games-list">
    <div className="game">
      <div className="image-wrap">
        <img src="/home/220870.jpg" alt="Game One" />
      </div>
      <h3>World of Warcraft</h3>
      <div className="description">
        <p>This is the best game you have ever seen.</p>
      </div>
      <div className="data-buttons">
        <a href="#" className="btn details-btn">
          View Details
        </a>
      </div>
    </div>
    <div className="game">
      <div className="image-wrap">
        <img src="/home/220870.jpg" alt="Game One" />
      </div>
      <h3>World of Warcraft</h3>
      <div className="description">
        <p>This is the best game you have ever seen.</p>
      </div>
      <div className="data-buttons">
        <a href="#" className="btn details-btn">
          View Details
        </a>
      </div>
    </div>
    {/* <p class="no-games">No games available</p>  */}
    </section>

</>
</>

    );
};