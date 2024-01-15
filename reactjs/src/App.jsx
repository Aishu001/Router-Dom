import { useState } from 'react'
import All from './All'
import Fullstack from './Fullstack'
import Cyberscure from './Cyberscure'
import Career from './Career'
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <div>
        <nav className='nav-elements'>
          
          <ul>
            <li><Link to="/all">All</Link></li>
            <li><Link to="/fullstack">FullStack</Link></li>
            <li><Link to="/cyberscurty">Cyber Secruity</Link></li>
            <li><Link to="/career">Career</Link></li>
           
          </ul>
         

            </nav>

            <Routes>
              <Route path ="/all" exact Component={All} ></Route>
              <Route path ="/fullstack"  Component={Fullstack} ></Route>
              <Route path ="/cyberscurty"  Component={Cyberscure} ></Route>
              <Route path ="/career"  Component={Career} ></Route>
            
            </Routes>
 
      </div>
     </Router> 
    </>
  )
}

export default App
