import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import { setSearchField } from "../actions/action";

//-- Type --//
import { Dispatch } from "redux";

//----------------------------------------------------//
//----------------------------------------------------//

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearchChange: (e: any) => dispatch(setSearchField(e.target.value))
});

interface Props {
  onSearchChange: any;
}

const SearchBox: React.SFC<Props> = ({ onSearchChange }) => (
  <div className="pa2">
    <input
      aria-label="Search Cats"
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      placeholder="Search"
      onChange={onSearchChange}
    />
  </div>
);

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
