import { useState, useEffect } from "react";
import { Profile } from "../Profile";
import ScrollService from "../Utilities/ScrollService";
import Animations from "../Utilities/Animations";
import Footer from "./Footer";
import Header from "./Header";

import '../../Styles/Home.css'
import { ScrollAlert } from "./ScrollAlert";

export default function Home(props) {

  return (
    <>
      <div className="home-container" id={props.id || ""}>
        <Header />
        <Profile />
        <ScrollAlert />
        <Footer />
      </div>
    </>
  );
}
