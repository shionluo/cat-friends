import React, { useEffect } from "react";

import { connect } from "react-redux";

//-- Actions --//
import { requestCats } from "../actions/action";

//-- Components --//
import Card from "./Card";

//-- Type --//
import { AppState } from "../store/configureStore";
import { ThunkDispatch } from "redux-thunk";

//----------------------------------------------------//
//----------------------------------------------------//

const mapStateToProps = (state: AppState) => ({
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  searchField: state.searchCats.searchField
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  requestCats: () => dispatch(requestCats())
});

interface Props {
  cats: any[]
  isPending: boolean;
  searchField: string;
  requestCats: () => void;
}

const CardList: React.SFC<Props> = ({
  cats,
  isPending,
  searchField,
  requestCats
}) => {
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
