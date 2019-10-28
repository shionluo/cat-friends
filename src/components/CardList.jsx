import React, { useEffect } from "react";

import { connect } from "react-redux";

//-- Actions --//
import { requestCats } from "../action";

//-- Components --//
import Card from "./Card";

//----------------------------------------------------//
//----------------------------------------------------//

const mapStateToProps = state => ({
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  searchField: state.searchCats.searchField
});

const mapDispatchToProps = dispatch => ({
  requestCats: () => dispatch(requestCats())
});

const CardList = ({ cats, isPending, searchField, requestCats }) => {
  useEffect(() => {
    requestCats();
  }, [requestCats]);

  const filterCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1 className="tc">Loading ...</h1>
  ) : (
    <div>
      {filterCats.map(cat => (
        <Card key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
