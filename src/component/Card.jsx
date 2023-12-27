import React,{useState} from 'react'
// use hook to append element r component into the dom with the help of "useState"
function Card({cart,setCart, product}) {
// here, cart----> state variable   setCart-----> state function.
// state variable & fun. get from the App.jsx

let [toggle, setToggle]=useState(true);

  return <>
    <div className="col mb-5">
        <div className="card h-100">
            {/* <!-- Sale badge--> */}
            <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right:"0.5rem"}}>Sale</div>
            {/* <!-- Product image--> */}
            <img className="card-img-top" src="https://www.shutterstock.com/shutterstock/photos/2032202699/display_1500/stock-vector-vadakkam-south-indian-meal-vector-mascot-logo-design-template-2032202699.jpg" alt="food img" />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{product.Dish}</h5>
                    <span className='price'><b>${product.Price}</b></span>
        
                </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    { toggle? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCart(cart+1); setToggle(!toggle)
                    
                }}>Add to cart</button> :
                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCart(cart-1);setToggle(current=>!current)
                }}>Remove from cart</button>
                }
                </div>  
            </div>
        </div>
    </div>
  </>
}

export default Card