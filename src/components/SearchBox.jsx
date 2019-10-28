import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import { setSearchField } from "../action";

//----------------------------------------------------//
//----------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value))
});

const SearchBox = ({ onSearchChange }) => (
  <div className="pa2">
    <input
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
