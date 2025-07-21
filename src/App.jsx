import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

import MainLayout from "./layout/MainLayout";
import ObserverProvider from "./providers/ObserverProvider";
function App() {
  return (
    <ObserverProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </ObserverProvider>
  );
}

export default App;
