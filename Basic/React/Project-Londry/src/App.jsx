import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NavbarMe from './Comp/NavbarMe';
import Main from './Comp/MainBody';
import FooterMe from './Comp/FooterMe';
import TransMain from './Comp/TransMain';

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"/>
      {
        loading ?
        <div className="loading">
          <Spinner animation="border" variant="info" />
        </div> 
        :
      <Router>
        <NavbarMe />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/Trans' element={<TransMain/>}/>
          </Routes>
        <FooterMe />        
      </Router>
      }   
    </>
  )
}

export default App
