import ProfileCard from "./Profilcard"
import Header from  "./components/Header"
import Sidebar from  "./components/Sidebar"
import Main    from  "./components/Main"
import Footer from "./components/Footer"


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

  
  </>
  )

}

export default App

