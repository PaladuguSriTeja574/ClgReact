// import './App.css'
import About from './About'
import Counter from './Counter'
import Invalid from './Invalid'
import Home from './Home'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Calculator from './Calculator';

function App() {
  return (
    <>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/counter" element={<Counter />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<Invalid />} /> 
              <Route path="/Calculator" element={<Calculator />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
