import React, { useEffect } from "react";

import { connect } from "react-redux";

//-- Actions --//
import { setSearchField, requestCats } from "../action";

//-- Components --//
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

//-- Styles --//
import "./App.css";

//----------------------------------------------------//

const mapStatetoProps = state => ({
  searchField: state.searchCats.searchField,
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  error: state.requestCats.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestCats: () => dispatch(requestCats())
});

const App = ({
  searchField,
  cats,
  isPending,
  onSearchChange,
  onRequestCats
}) => {
  useEffect(() => {
    onRequestCats();
  }, [onRequestCats]);

  const filterCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1 className="tc">Loading ...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList cats={filterCats} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
