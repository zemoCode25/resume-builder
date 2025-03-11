import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/main" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
