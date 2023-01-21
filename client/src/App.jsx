import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/blog-pages/Blog_home';
import Products from './pages/shop-pages/Products';
import Cart from './pages/shop-pages/Cart';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='blog-home' element={<Blog />}/>
      <Route path='products' element={<Products />}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='*' element={<Nopage />}/>
    </Route>
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
