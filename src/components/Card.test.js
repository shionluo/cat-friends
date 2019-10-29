import React from "react";

//-- Enzyme --//
import { shallow } from "enzyme";
import "../setupTests";

//-- Components --//
import CardList from "./Card";

//----------------------------------------------------//  
//----------------------------------------------------//

it("Expect to render Card Component", () => {
  expect(shallow(<CardList />).debug()).toMatchSnapshot();
});