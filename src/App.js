import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Video';
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/video' element={<Video/>}></Route>
          <Route exact path='/signin' element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
