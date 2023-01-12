import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import New from "./Pages/New";
import Second from "./Pages/Second";
function App() {
  return (
    <div>
      <Router>
       {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<New/>} />
        <Route path="/second" element={<Second/>} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
