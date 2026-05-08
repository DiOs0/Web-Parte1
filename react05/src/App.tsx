import {Route, Routes} from "react-router-dom"
import './App.css'
import Form1 from "./pages/Form1"
import Form2 from "./pages/Form2"

function App() {

    return (
        <>


            <Routes>
                <Route path="/" element={<Form1/>}/>
                <Route path="/form2" element={<Form2/>}/>
            </Routes>
        </>
    )
}

export default App
