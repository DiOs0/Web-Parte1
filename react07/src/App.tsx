import './App.css'
import NavBar from "./components/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Posts from "./pages/Posts.tsx";
import About from "./pages/About.tsx";

function App() {


  return (
    <>
      <NavBar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    </>
  )
}

export default App
