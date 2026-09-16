import ProductList from "./components/ProductList"

function App(){

  const products =[
    {id: "p1", name: "Wireless Headphones", price: 99, inStock: true, rating: 4.8},
    { id: "p2", name: "Mechanical Keyboard", price: 120, inStock: true, rating: 4.2 },
    { id: "p3", name: "USB-C Hub", price: 45, inStock: false, rating: 4.9 },
    { id: "p4", name: "Ergonomic Mouse", price: 70, inStock: true, rating: 3.5 },
    { id: "p5", name: "Laptop Stand", price: 35, inStock: false, rating: 4.0 },
  ]


  return(

    <div>
      <h1>E-Commerce Product Showcase</h1>
      <ProductList products={products}/>
    </div>
  )



}

export default App;
