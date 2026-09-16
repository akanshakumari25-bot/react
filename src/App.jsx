// import ProductCard from "./components/ProductCard"

// function App(){

// const Products =[
// { id: 101, name: "Wireless Mouse", price: 29.99, inStock:true},
// { id: 102, name: "Mechanical Keyboard", price: 89.99,inStock:false },
// { id: 103, name: "USB-C Hub", price: 45.00,inStock:true }
// ]

// return (
//   <div>
//     {Products.map((singleProduct)=>
//     <ProductCard  key={singleProduct.id} name={singleProduct.name} price={singleProduct.price} inStock={singleProduct.inStock}/>
    
    
//     )}

//   </div>
// )
// }

//  export default App;



// JobCard

// import JobCard from "./components/JobCard";

// function App(){

//   const jobs =[
//     {id: 1, title: "Frontend Dev", company: "TechCorp", location: "Remote", isNew: true},
//     {id: 2, title: "Backend Dev", company: "Meta", location: "Remote", isNew: false},
//     {id: 3, title: "Full-stack Dev", company: "Flipkart", location: "Remote", isNew: true}
// ]

// return(

//   <div>
//      {jobs.map((job)=>
//      <JobCard key={job.id} details={job}/>
    
//     )}

//   </div>



// )



// }

// export default App;



import Child from "./components/Child";

function App(){

  return(
    <div>
      <Child title="Hello World"  description="this is the description"/>
    </div>
  )

}

export default App;