import ProductCard from "./ProductCard";

function ProductList({products}){
    return(

        <div> 
            {products.map((singleProduct) =>(
                <ProductCard key ={singleProduct.id} product ={singleProduct}/>


            ))}
        </div>
    )


}








export default ProductList;


