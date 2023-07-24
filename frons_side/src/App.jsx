import MainHeader from "./components/MainHeader"
import MainNav from "./components/MainNav"
import MainSection from "./components/MainSection"
import './App.css'



function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/1"
  return (
    <>
      <MainHeader/>
      <MainNav />
      <MainSection apiUrl={url}/>
      
    </>
  )
}

export default App
