import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./shared/components/Navigation/MainNav";
import "./App.scss";

import Header from "./shared/components/Navigation/Header";
import Features from "./shared/components/Features/Features";
import Gallery from "./shared/components/Gallery/Gallery";
import Feedback from "./shared/components/Feedback/Feedback";
import Footer from "./shared/components/Footer/Footer";
import Houses from "./shared/components/Houses/Houses";
import Brands from "./shared/components/Brands/Brands";
import SideDrawer from "./shared/components/UI/SideDrawer/SideDrawer";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleSideDrawer = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <Router basename='/real-estate'>
        <main>
          <SideDrawer show={isToggled} />
          <Header show={isToggled} onToggle={toggleSideDrawer} />
          <Brands />
          <Features />
          <Feedback />
          <Houses />
          <Gallery />
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
