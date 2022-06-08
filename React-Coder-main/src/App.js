
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartList from './components/Cart/CartList';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './context/CartContext';
import Formulario from './components/Form/Form';


function App() {


  return (
    
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/formulario' element={<Formulario/>}/>
              <Route path='/' element={<ItemlistContainer/>} />
              <Route path='/category/:typeId' element={<ItemlistContainer/>}/>
              <Route path='/Item/:id' element={<ItemDetailContainer/>} />
              <Route path='/Cart' element={<CartList/>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    
  );
}

export default App;
