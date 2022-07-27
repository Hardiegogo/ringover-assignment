
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact-page/Contact';
import Journey from './pages/journey-page/Journey';
import Product from './pages/product-page/Product';
import Store from './pages/Store-page/Store';
import Team from './pages/team-page/Team';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
