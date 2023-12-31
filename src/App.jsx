import React, { useState } from 'react'
import Nav from './component/Nav'
import Head from './component/Head'
import Card from './component/Card'

function App() {
let [cart,setCart]= useState(0)  //creating the state Var. & Fun.

let product=[
  {
    Dish:"veg-Meals",
    Price:4
  },
  {
    Dish:"pannir-Frid Rice",
    Price:6
  },
  {
    Dish:"non-veg.Meals",
    Price:6
  },
  {
    Dish:"Noodles",
    Price:4
  },
  {
    Dish:"Varity Rice",
    Price:3
  },
  {
    Dish:"chees-Burger",
    Price:4
  },
  {
    Dish:"Fesh Juice",
    Price:3
  },
  {
    Dish:"Ice-Cream",
    Price:5
  }
]

  return  <>
  <Nav cart={cart} setCart={setCart}/>
  <Head/>
  <section className="py-5">
   <div className="container px-4 px-lg-5 mt-5">
       <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">      
  {/* state is given as props into the element(<card/>) call */}
          {product.map((e,i)=> {
             return <Card cart={cart} setCart={setCart} product={e} key={i}/>
            })
          }         
        </div>
    </div> 
  </section>       
  
  </>
}

export default App