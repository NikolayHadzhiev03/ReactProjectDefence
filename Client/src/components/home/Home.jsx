import { Link} from 'react-router';
export default function Home(){

    return (
<>
<>
  <div className="background-blur" />
  <section id="game-world">
    <div className="welcome-message">
      <h2>Where Legends Are Born</h2>
      <h3>Find Your Next Adventure Here!</h3>

      <Link to='/catalog'>Check games</Link>
    </div>
  </section>

</>
</>

    );
};