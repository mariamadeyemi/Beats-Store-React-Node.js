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
import Product from './pages/shop-pages/Product';
import Page from './pages/blog-pages/Page';
import CreatePost from './pages/blog-pages/CreatePost';
import CreateProduct from './pages/shop-pages/CreateProduct';



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='blog-home' element={<Blog />}/>
      <Route path='post' element={<Page />}/>
      <Route path='write-post' element={<CreatePost />}/>
      <Route path='products' element={<Products />}/>
      <Route path='product' element={<Product />}/>
      <Route path='create-product' element={<CreateProduct />}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='*' element={<Nopage />}/>
    </Route>
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
