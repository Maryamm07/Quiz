import { useState } from 'react';
import questions from './questions';
import "./Quiz.css";
import { useLocation } from 'react-router-dom';

function Quiz() {
    const location = useLocation();
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ showScore, setShowScore ] = useState(false);
    const [ score, setScore ] = useState(0);
    const [ lock, setLock ] = useState(false)
 
    const handleButton = () => {
      setLock(false)
     const nextQuestion = currentQuestion + 1;
     if(nextQuestion < questions.length){
       setCurrentQuestion(nextQuestion);
     }else{
       setShowScore(true);
     }
    }
    const CorrectAnswer = (isCorrect) => {
      if(lock === false){
        setLock(true)
       if(isCorrect === true){
           setScore(score + 1);
       }
      }
    }
   return (
     <>
        <div className="heading">
          <h1>Welcome to the quiz, {location.state.userName}!✨</h1>
        </div>
       <div className='quiz'>
         { showScore ? (
           <div className="score-section">
             {score === 10 ? (
              <h1>Congratulations, You scored 10 out of 10!🎉</h1>
              ) : score < 5 ? (
              <h1>You scored {score} out of {questions.length},<br />Better Luck next time...</h1>
              ) : (
              <h1>You scored {score} out of {questions.length}!🎉</h1>
             )}
           </div>
           ) : (
         <div>    
         <div className="question-section">
           <div className="question-count">
             <h2><span>Question {currentQuestion + 1}</span>/{questions.length}</h2>
           </div>
         <div className="question-text">
             {questions[currentQuestion].questionText}
         </div> 
         </div>
               <div className="answer-section">
                   {questions[currentQuestion].answerOptions.map((answerOption, index) => {
                       return(
                        <button key={index} onClick={() => CorrectAnswer(answerOption.isCorrect)}
                        className={`answer-button ${lock && answerOption.isCorrect ? "correct" : ""}
                        ${lock && !answerOption.isCorrect ? "wrong" : ""}`}>
                        {answerOption.answerText}</button>
                       )
                   } )}
                 </div>
                <div className="next">
                    <button onClick={handleButton}>Next</button>
                </div>
               </div>
               )}
       </div>
     </>
   )
 }
 
 export default Quiz