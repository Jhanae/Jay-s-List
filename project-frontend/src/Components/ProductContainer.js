import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard'
import Filter from './Filter'
import { useState } from 'react';

function ProductContainer({products, profileID}) {
    const [searchText, setSearch] = useState("")
    const [type, setType] = useState('All')

    
    const useStyles = makeStyles((theme) => ({
        colorText: {
            color:'#FCC4D6',
            paddingTop: '3rem'
        },
        title: {
            fontSize: '3rem',
            color: 'black'
        },
    }));
    const classes = useStyles()
    function sortPrice(){
        products.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }
    function sortQuantity(){
        products.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1)
    }

    
    const filterText = products.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    const filterType = filterText.filter(item => item.name.toLowerCase().includes(type.toLowerCase()) )
    let product
    if(type === 'All')
    {
        product = filterText.map(item => <ProductCard product={item} profileID={profileID} key={item.id} sortQuantity={sortQuantity} sortPrice={sortPrice}/> )
    }else{
        product = filterType.map(item => <ProductCard product={item} profileID={profileID} key={item.id} /> )
    }  
    console.log(products)

    
    return (
        <div className="prod-container ">
            <br/><br/><br/>
            <h1 className={classes.title}>All <span className={classes.colorText}>Products</span></h1><br/>
            <Filter setType={setType} setSearch={setSearch}/>
            <div className="row">
                {product}
            </div>
        </div>
    )
}

export default ProductContainer
