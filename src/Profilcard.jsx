function ProfileCard(){

    return (
      <div className="profile-card" style={{ backgroundColor: "#f4f4f4;"}}>
      <img src="profile.jpg" alt="User Profile"/>
      <h2>John Doe</h2>
      <p className="bio">Software Developer</p>
</div>
    )
}

export default ProfileCard ;



// function JobCard( {title , company, location,isNew}){
// return(
//     <div>
//         <h2>{title}
//         {isNew && <span>New</span>}
//         </h2>
//         <p>Company :{company}</p>
//         <p>location:{location}</p>
        

//     </div>



// )


// }


// export default JobCard;

// function Child({title,description}){
//     return(
//    <div>
//     <h2>{title}</h2>
//     <p>{description.toUpperCase()}</p>
//    </div>


//     )


// }

// export default Child;





// import ProductCard from "./ProductCard";

// function ProductList({products}){

// return (
//     <div>
//        {products.map((product)=>(
// <ProductCard   key ={product.id} product={product}        />
       


// )) }
//     </div>
// )

// }

// export default ProductList;




// function ProductCard({name,price}){
// return (
//     <div>
//        <h2>{name}</h2>
//        <p>Price:${price}</p>


//     </div>
// )

// }

// export default ProductCard;



// import ProductList from "./components/ProductList"

// function App(){

//   const products =[
//     {id: "p1", name: "Wireless Headphones", price: 99, inStock: true, rating: 4.8},
//     { id: "p2", name: "Mechanical Keyboard", price: 120, inStock: true, rating: 4.2 },
//     { id: "p3", name: "USB-C Hub", price: 45, inStock: false, rating: 4.9 },
//     { id: "p4", name: "Ergonomic Mouse", price: 70, inStock: true, rating: 3.5 },
//     { id: "p5", name: "Laptop Stand", price: 35, inStock: false, rating: 4.0 },
//   ]


//   return(

//     <div>
//       <h1>E-Commerce Product Showcase</h1>
//       <ProductList products={products}/>
//     </div>
//   )



// }

// export default App;

// import JobCard from "./components/JobCard";

// function App(){

// const jobs =[

// { id:1, title: "Frontend Dev", company: "TechCorp", location: "Remote", isNew: true},

// { id:2, title: "Backend Dev", company: "Meta", location: "Remote", isNew: true},

// { id:3, title: "FullStack Dev", company: "Flipkart", location: "Remote", isNew: false},

// ]


// return (

//   <div>



    
//   </div>
// )





// }

// export default App;