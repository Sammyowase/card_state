import About from "./Pages/About"
import Homepage from "./Pages/Hompage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
const App =()=>{
  return (
      <div>
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/About" element={<About/>}/>
         </Routes>
         </BrowserRouter>
      </div>
  )
}

export default App