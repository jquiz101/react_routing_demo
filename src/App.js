import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/:userid/:username" element={<Home />} />
        <Route path="home/:userid" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jeopardy" element={<Jeopardy />} />

        {/* 404 route should always be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
