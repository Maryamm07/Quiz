import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <div className="title">
                <h1>Welcome to Maryam's Quiz!✨</h1>
                <p>You will be presented with 10 questions in total, and each accurate response will earn you 1 point. </p>
                <p>Good luck!</p>
                <div className="btn">
                    <Link to="/user"><button>Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Home