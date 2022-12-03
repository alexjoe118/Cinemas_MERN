import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar} from '../components'
import { MoviesList, MovieInsert, MoviesUpdate} from '../pages'


// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/movies/list" element={<MoviesList/>} />
        <Route path="/movies/create" element={<MovieInsert/>} />
        <Route path="/movies/update/:id" element={<MoviesUpdate/>} />
      </Routes>
    </Router>
  );
}

export default App;
