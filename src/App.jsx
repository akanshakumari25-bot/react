import ProfileCard from "./Profilcard"
import Header from  "./components/Header"
import Sidebar from  "./components/Sidebar"
import Main    from  "./components/Main"
import Footer from "./components/Footer"
import Profile from "./components/Profile"



const user1 ={
  name:"Alice",
  age:28,
  role:"Frontend developer"
}
const user2 ={
  name:"Bob",
  age:30,
  role:"Backend Developer"
}

function App(){
  return (
  <>
  <h1>hello React</h1>
  <ul>
    <li>Javascript</li>
    <li>java </li>
    <li>C++</li>
    </ul>
 <ProfileCard/>
  <Header/>
  <div className="box">
     <Sidebar/>
    <Main/>
  </div>
 
 <Footer/>



 <Profile name={user1.name} age ={user1.age} role={user1.role}/>
 <Profile name={user2.name} age ={user2.age} role={user2.role}/>

 
 
 </>
  )

}


export default App;