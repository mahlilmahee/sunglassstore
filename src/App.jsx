import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 
 <Routes>

  <Route path='/' element={<Home></Home>}>

  </Route>
  <Route path='/about' element={<About></About>}>

  </Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
