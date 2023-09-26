import React from "react";
import { Helmet } from 'react-helmet';
import MainScreen_1 from "./Main-page-content/Main-screen-1";
import MainScreen_2 from "./Main-page-content/Main-screen-2";
import MainScreen_3 from "./Main-page-content/Main-screen-3";
import MainScreen_4 from "./Main-page-content/Main-screen-4";
import MainScreen_5 from "./Main-page-content/Main-screen-5";

function MainPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Генаград - лучший город для игроков PoopLand в Minecraft!" />
      </Helmet>
      <MainScreen_1 />
      <div className="sectionCrossing sectionCrossing_1"></div>
      <MainScreen_2 />
      <div className="sectionCrossing sectionCrossing_2"></div>
      <MainScreen_3 />
      <div className="sectionCrossing sectionCrossing_3"></div>
      <MainScreen_4 />
      <MainScreen_5 />
    </>
  );
}

export default MainPage;