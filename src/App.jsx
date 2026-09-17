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



// import Child from "./components/Child";

// function App(){

//   return(
//     <div>
//       <Child title="Hello World"  description="this is the description"/>
//     </div>
//   )

// }

// export default App;
// import DashBoard from "./components/DashBoard";


// function App(){


//   return(
//     <div>
//   <DashBoard  isLoggedIn={false} isAdmin={true} hasError={flase}    />

//  </div>
//   )
// }

// export default App;

// import{useState} from 'react'



// function App(){

//  const [data ,setData] = useState(50)




// //  const handler = (name,age,location) =>{

// //   alert(`you have clicked the button ${name} ${age} ${location}`);
// //  }
 
// let handleClick = ()=>{
//   setData(data+1);


// }

// let handlerCheck =()=>{
//   setData(data-1);
// }




//   return(
// <div>
//   <h1>Data:{data}</h1>
//   {/* <button onClick={ () => handler("Akansha",25,"Delhi")}>Click me</button> */}
//   {<button onClick={handleClick}>+</button>}
//     {<button onClick={handlerCheck}>-</button>}



//     <h1>Hello React js </h1>;

// </div>
//   )
// }

// export default App;


// import Counter from "./components/Counter";
// import ThemeToggle from "./components/ThemeToggle";

// function App(){
//   return(
//     <div>
//      <Counter/>
//      <ThemeToggle/>
//     </div>
//   )
// }







// export default App;


import InteractiveForm from "./components/InteractiveForm";

function App(){

 return (

  <div>
    <InteractiveForm/>
  </div>
 )



}

export default App;