import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function User(){
    const [ userName, setUserName ] = useState('');
    const navigate = useNavigate();
    const handleInput = () => {
        if (userName.trim() !== '') {
            navigate('/quiz', { state: { userName } });
        } else {
            alert('Please enter your name before starting the quiz.');
        }
    }
    return(
        <div>
            <div className="user">
                <h2>Enter your name!</h2>
                <div className="inp">
                    <input type="text" placeholder="Enter your name..." value={userName}
                        onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="btn1">
                    <button onClick={handleInput}>Start the Quiz</button>
                </div>
            </div>
        </div>
    )
}
export default User