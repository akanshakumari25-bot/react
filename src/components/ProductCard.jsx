function  ProductCard({ product}){
   const {name,price,inStock,rating}=product;


   return (
    <div>
        <h2>{name}</h2>
        <p>price:${price}</p>
        <p>rating:{rating}</p>

        {rating>=4.5 &&(
            <p>Top Rated</p>
        )}
        <div>
          {inStock ? (<button>Buy Now</button>):(<button>Out of Stock</button>)}


        </div>

    </div>
   )

}

export default ProductCard;