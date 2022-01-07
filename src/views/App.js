import './App.scss'
import { data } from '../data/data.js'
import { useEffect } from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import { useState } from 'react'

const CART_LOCAL_KEY = 'CART_LOCAL_KEY'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {
    let list = JSON.parse(data).shoes
    setProducts(list)

  }, [])

  useEffect(() => {
    let cartTmp = localStorage.getItem(CART_LOCAL_KEY)
    if (cartTmp) cartTmp = JSON.parse(cartTmp)

    if (cartTmp && cartTmp.length > 0) {
      setCart(cartTmp)
    }

  }, [])

  useEffect(() => {
    if (cart) {
      localStorage.setItem(CART_LOCAL_KEY, JSON.stringify(cart))
    } else {
      localStorage.removeItem(CART_LOCAL_KEY)
    }
  }, [cart])


  //function add product to cart
  function addCart(product) {
    let item = {
      ...product,
      count: 1,
    }
    setCart([
      ...cart,
      item,
    ])

  }

  function remove(id) {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  function minus(id) {

    let indexTmp = -1

    let newCart = cart.map((item, index) => {
      if (item.id === id) {
        item.count = item.count - 1
      }

      if (item.count === 0) indexTmp = index

      return item
    })

    if (indexTmp !== -1) {
      newCart.splice(indexTmp, 1)
    }

    setCart(newCart)
  }

  function plus(id) {
    const newCart = cart.map(item => {
      if (item.id === id) {
        item.count = item.count + 1
      }

      return item
    })

    setCart(newCart)
  }


  return (
    <div className="app">
      <Products
        products={products}
        addCart={addCart}
        cart={cart}
      />
      <Cart
        cart={cart}
        minus={minus}
        plus={plus}
        remove={remove}
      />
    </div>
  );
}

export default App;
