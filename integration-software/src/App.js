import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Forecast/>} />
      </Routes>
    </Router>
  );
}

export default App;
