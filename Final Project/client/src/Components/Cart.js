import React from 'react'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import {makeStyles} from '@material-ui/core/styles';
import { Button } from 'react-bootstrap'


function Cart({products, profileID}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        title: {
            color: '#FCC4D6'
        }
    }));
    const classes = useStyles()

    const [cartItem, setCartItem] = useState([])
    
    const API = `http://localhost:3000/profiles/${profileID}`
    useEffect(() => {
        async function fetchProducts(){
          const result = await fetch(API);
          const items = await result.json();
          setCartItem(items.products)
        }
        fetchProducts()
        
      }, [])
      
      
    const product = cartItem.map(item => <CartItem item={item} key={item.id} id={item.id} profileID={profileID}/>)
    const sum = (cartItem.reduce((a,v) =>  a = a + v.price , 0 ))
    const tax = 6/100*sum
    const shipping = 5.99
    const total = sum + tax + shipping
    return (
        <div className="prod-container">   
        <br/><br/><br/>
        <div className="row">
            <hr/>
            <h1 className={classes.title}>Cart</h1>
            <hr/>
            {product}
            </div>
            <hr/>
            <p>Subtotal: ${sum}.00</p>
            <p>Tax: ${tax}</p>
            <p>Shipping: ${shipping} </p>
            <p>Total: ${total.toFixed(2)}</p>
            <Button className="filter-btns">Continue to Checkout</Button>
            <hr/>

        </div>
    )
}

export default Cart
