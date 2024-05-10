import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar home={"Home"} about={"About"} contact={"Contact"} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
