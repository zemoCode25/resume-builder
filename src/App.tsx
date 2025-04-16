import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { Templates } from "./pages/Templates";
import { TemplateProvider } from "./contexts/TemplateProvider";
import { ResumeDataProvider } from "./contexts/ResumeDataProvider";
import { CVDataProvider } from "@/contexts/CVDataProvider";

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
          <Route
            path="/main"
            element={
              <CVDataProvider>
                <ResumeDataProvider>
                  <Main />
                </ResumeDataProvider>
              </CVDataProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
