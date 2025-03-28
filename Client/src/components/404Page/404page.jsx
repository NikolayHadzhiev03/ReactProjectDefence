import {Link} from "react-router"
export default function FOFPage(){
    return(
    <div id="not-found-page">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link to={"/"} class="go-back-btn">Go Back to Home</Link>
      </div>
      )
}