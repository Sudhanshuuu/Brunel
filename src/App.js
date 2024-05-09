import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Success' element={<Success/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
