import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import Header from "./components/Header";
// import BookingForm from "./components/BookingForm";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      {/* <BookingForm /> */}
      <Router>
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
      <Menu />
      <Reviews />
      <About />
      <Footer />
    </div>
  );
}

export default App;
