// function ProductCard({product,AddToCart }){
//     return(
//         <>
//         <div>
//             <h2>{product.name}</h2>
//             <p>price:${product.price}</p>
//             {product.inStock ?(<span>in stock</span>):<span>out of stock</span>} 
//             <br />
//             <button onClick={()=> AddToCart(product) }>Add to cart</button>
//         </div>

//         {/* <div>total items in cart</div> */}
        
//         </>



//     )


// }

// export default ProductCard;




function ProductCard({name,price,inStock}){
    return(
        <div className="Div">
        <div className="box">
         <h2>{name}</h2>
         <p>price:${price}</p>
         {!inStock && <p>Sold out </p>}



        </div>
        </div>
    )





}

export default ProductCard;