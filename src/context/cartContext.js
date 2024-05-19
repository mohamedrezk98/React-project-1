import axios from 'axios'
import React, { createContext, useState } from 'react'


export let cartContext = createContext()

async function addToCart(productId) {
  return axios.post("https://ecommerce.routemisr.com/api/v1/cart", { productId }, {
    headers: { token: localStorage.getItem("token") }
  }).then(({ data }) => data).catch(err => err)
}

async function deleteFormCart(productId) {
  return axios.delete("https://ecommerce.routemisr.com/api/v1/cart/"+ productId , {
    headers: { token: localStorage.getItem("token") }
  }).then(({ data }) => data).catch(err => err)
}
async function updateQTY (productId,count) {
  return axios.put("https://ecommerce.routemisr.com/api/v1/cart/"+ productId , {count},{
    headers: { token: localStorage.getItem("token") }
  }).then(({ data }) => data).catch(err => err)
}
async function createChekchout (cartId) {
  return axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/"+ cartId ,{},{
    headers: { token: localStorage.getItem("token") }
  }).then(({ data }) => data).catch(err => err)
}

async function getUserCart() {
  return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: { token: localStorage.getItem("token") }
  }).then(({ data }) => data).catch(err => err)
}

export default function CartContextProvider({ children }) {
  let [counter, setCounter] = useState(0)
  return <cartContext.Provider value={{ counter, setCounter, addToCart,getUserCart ,deleteFormCart,updateQTY,createChekchout}}>

    {children}


  </cartContext.Provider>
}
