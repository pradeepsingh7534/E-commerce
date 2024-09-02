import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import DisplayCategory from './components/DisplayCategory';
import Shop from './pages/Shop';
import Details from './pages/Details';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Contact from './pages/Contact';
import OrderPlaced from './components/OrderPlaced';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/display' element={<DisplayCategory/>}></Route>
  <Route path='/shop' element={<Shop/>}></Route>
  <Route path='/details' element={<Details/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/checkout' element={<CheckOut/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/order' element={<OrderPlaced/>}></Route>
 </Routes>
 </BrowserRouter>
//  </Provider>



);
