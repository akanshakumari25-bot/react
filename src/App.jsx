// import { useState } from "react";
// import ProductCard from "./components/ProductCard";

// function App(){


//   const [cart, setCart]=useState([])
//   const products =[
//     {id: 101, name: "Wireless Mouse", price: 29.99 , inStock:true},
//     { id: 102, name: "Mechanical Keyboard", price: 89.99,inStock:false },
//     { id: 103, name: "USB-C Hub", price: 45.00, inStock:true}
// ]
// function AddToCart(product){
// setCart([...cart, product])
  


// }

// return(
// <div>
// {products.map((singleProduct)=>
// <ProductCard key={singleProduct.id} product={singleProduct} AddToCart={AddToCart}/>



// )}
// 12q
// <div>
//   total items : {cart.length}
// </div>
// </div>
// )

// }

// export default App;

import ProductCard from "./components/ProductCard"

function App(){

const Products =[
{ id: 101, name: "Wireless Mouse", price: 29.99, inStock:true},
{ id: 102, name: "Mechanical Keyboard", price: 89.99,inStock:false },
{ id: 103, name: "USB-C Hub", price: 45.00,inStock:true }
]

return (
  <div>
    {Products.map((singleProduct)=>
    <ProductCard  key={singleProduct.id} name={singleProduct.name} price={singleProduct.price} inStock={singleProduct.inStock}/>
    
    
    )}

  </div>
)
}

 export default App;