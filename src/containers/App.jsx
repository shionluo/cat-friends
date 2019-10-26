import React, { useState, useEffect } from "react";

//-- Components --//
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

//-- Styles --//
import "./App.css";

//----------------------------------------------------//

const App = () => {
  const [cats, setCats] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setCats(users));
  }, []);

  const onSearchChange = e => {
    setSearchField(e.target.value);
  };

  const filterCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return cats.length ? (
    <div className="tc">
      <h1 className="f1">Cat Friends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList cats={filterCats} />
        </ErrorBoundry>
      </Scroll>
    </div>
  ) : (
    <h1 className="tc">Loading ...</h1>
  );
};

export default App;
