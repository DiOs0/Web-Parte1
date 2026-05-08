import './App.css'
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import {Link, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/contact/test1">Contact1</Link>
          <br/>
          <Link to="/contact/test2">Contact2</Link>

      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact/:name" element={<Contact/>}/>
      </Routes>

    </>
  )
}

export default App
