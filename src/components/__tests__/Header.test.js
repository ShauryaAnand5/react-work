import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with the Login Button.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"}); // Good Practise

  // const loginButton = screen.getByText("Login")

  expect(loginButton).toBeInTheDocument();

});

it("Should render Header Component with the Cart (0).", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)"); // Good Practise

  // const loginButton = screen.getByText("Login")

  expect(cartItems).toBeInTheDocument();

});

it("Should render Header Component with the Cart.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // Using Regex

  // const loginButton = screen.getByText("Login")

  expect(cartItems).toBeInTheDocument();

});

it("Should change Login to Log Out Button on click.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Log Out"});

  expect(logoutButton).toBeInTheDocument();

});