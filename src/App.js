import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import "./assets/styles/main.scss";
import JobRequest from "./pages/JobRequest/JobRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/request" element={<JobRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
