import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/coin/:id" element={<Coin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
