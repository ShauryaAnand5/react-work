import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // Mocking the global fetch function
  return Promise.resolve({
    // fetch() returns a Promise that resolves to a response-like object
    json: () => {
      // The response object's .json() method is also mocked
      return Promise.resolve(MOCK_DATA); // .json() returns a Promise that resolves to mock data
    },
  });
});

// beforeAll(() => {
//   console.log("Before All");
// });

// beforeEach(() => {
//   console.log("Before Each");
// });

// afterAll(() => {
//   console.log("After All.");
// });

// afterEach(() => {
//   console.log("After Each");
// });

it("Should Search Res List for Pizza text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  // // expect(searchBtn).toBeInTheDocument();

  //Screen should load 2 cards with the name pizza on them.
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(cardsAfterSearch);
  expect(cardsAfterSearch.length).toBe(3);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByTestId("topRatedButton");

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(15);
});
