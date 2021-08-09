import './App.css';
import Home from './Components/Home';
import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import ProductContainer from './Components/ProductContainer'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
import LogIn from './Components/LogIn'
import EditProfile from './Components/EditProfile'

function App() {
  const [products, setProducts] = useState([])
  const [profileID, setProfileID] = useState(4)
  const [productID, setProductID] = useState([])
  const [isLoggedIn, setisLoggedIn] = useState(false)
  // const [name, setName] = useState("")

  const API = "http://localhost:3000/products"
  useEffect(() => {
    async function fetchProducts(){
      const result = await fetch(API);
      const items = await result.json();
      setProducts(items)
    }
    fetchProducts()
    
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Switch>
          <Route exact path="/" component={() => <Home products={products}/>} />
          <Route exact path="/shop" component={() => <ProductContainer products={products} setProductID={setProductID} productID={productID} setprofileID={setProfileID} profileID={profileID}/>} />
          <Route exact path="/cart" component={() => <Cart profileID={profileID} />} />
          <Route exact path="/log-in" component={() => <LogIn isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} setProfileID={setProfileID} profileID={profileID}/>} />
          <Route exact path="/profile" component={() => <Profile isLoggedIn={isLoggedIn} profileID={profileID}/>} />
          <Route exact path="/update-profile" component={() => <EditProfile profileID={profileID} isLoggedIn={isLoggedIn}/>} />
         </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;


