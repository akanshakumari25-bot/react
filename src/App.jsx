import ProductCard from "./components/Product";

const products =[
{
    id: 101,
    name: "Wireless Mouse",
    price: 29.99,
},
{
  id: 102, 
  name: "Mechanical Keyboard", 
  price: 89.99 
},
{
   id: 103,
    name: "USB-C Hub", 
    price: 45.00

 },

]


function App() {
  return (
    <div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;