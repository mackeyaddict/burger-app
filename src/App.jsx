import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Order from './pages/order';
import './App.css';

function App () {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order' element={<Order />}/>
      </Routes>
    </div>
  );
}

export default App;