

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