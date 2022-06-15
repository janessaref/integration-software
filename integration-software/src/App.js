import { BrowserRouter as Router, Route } from "react-router-dom";
import Forecast from "./components/Forecast";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Forecast} />
      </div>
    </Router>
  );
}

export default App;
