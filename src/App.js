import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import { Footer, Navbar, Jokes, Modal, ProjectDetail} from './components/index'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home.js'
// import PageDetail from './pages/PageDetail.js'



function App() {
  
    
  return (
      <>
        
  

    <Router>
    <Navbar/>
      
      {/* <PageDetail /> */}
      
      
      
    <ScrollToTop >
      <Routes>
      
           <Route exact path='/' element={<Home />}/>
         {/* <Route path='/project/' element={<Home />}/> */}
           <Route path='/projects/:id' element= {<ProjectDetail />}/>
           <Route path='/featuredapps/jokes' element= {<Jokes />}/>
      
       </Routes>
       </ScrollToTop>
       <Footer/>
    </Router>
    </>
  )
}

export default App;
