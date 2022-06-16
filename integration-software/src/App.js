import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Forecast from "./components/Forecast";
import Mainpage from "./pages/Mainpage";
import ForecastPage from "./pages/ForecastPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Mainpage/>} />
          <Route exact path="/forecast" element={<ForecastPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
