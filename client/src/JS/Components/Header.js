import { useState, useEffect } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../Utilities/commonUtils';
import ScrollService from '../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import faviconMac from '../../Assets/Icons/favicon/mac-152.png';
import '../../Styles/Header.css'
import { identity } from 'rxjs';


export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0)
  const [showHeaderOptions, setShowHeaderOptions] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // const homeButton = document.querySelector('.header-options').firstChild;
  // console.log(homeButton)
  // // homeButton.classList.add('hidden')

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };


  let currentScreenSubscription = 
  ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";

    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    //hides the home index button
    if (index === 0) classes += "hidden"
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (

    <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
      <div className="header-parent">
        <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo row">
          <h1 className="site-name">michaelmartell<span className="pink">.</span><span className="dark-grey">co</span></h1>
        </div>
        <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
