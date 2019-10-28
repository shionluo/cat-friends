import React from "react";

//-- Components --//
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

//-- Styles --//
import "./App.css";

//----------------------------------------------------//
//----------------------------------------------------//

const App = () => {
  return (
    <div className="tc">
      <Header />
      <SearchBox />
      <Scroll>
        <ErrorBoundry>
          <CardList />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
