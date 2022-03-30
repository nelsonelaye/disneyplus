import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Detail from "./Components/Detail/Detail"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/detail/:id" element={<Detail/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
