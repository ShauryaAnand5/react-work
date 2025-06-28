import React from 'react';
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render the RestaurantCard Component with props data.", () => {
  render(<RestaurantCard resData={{ info: MOCK_DATA}} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

// it("should render RestaurancCard Component with promoted label.", ()=> {
//    //  Test HOC: withPromotedLabel()
//     render(<withPromotedLabel />);

//     const label = screen.getByText("Promoted");

//     expect(label).toBeInTheDocument();
// })
