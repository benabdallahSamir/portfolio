import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./com/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-[100vw] h-[100vh] bg-background-primary font-sans text-text-primary">
      <Navbar />
      <Routes>
        <Route path="/aboutMe" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
