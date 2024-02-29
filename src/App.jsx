import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Quiz from './quiz';
import User from './User'

function App() {
    
   return (
     <>
       <div className='app'>
         <Router basename='/Quiz'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/user" element={<User />}/>
          </Routes>
         </Router>
       </div>
     </>
   )
 }
 
 export default App