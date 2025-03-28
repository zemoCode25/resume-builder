import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { Templates } from "./pages/Templates";
import { TemplateProvider } from "./contexts/TemplateProvider";
import { ResumeDataProvider } from "./contexts/ResumeDataProvider";

function App() {
  return (
    <TemplateProvider>
      <ResumeDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/templates" element={<Templates />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </ResumeDataProvider>
    </TemplateProvider>
  );
}

export default App;
