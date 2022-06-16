import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Mainpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
