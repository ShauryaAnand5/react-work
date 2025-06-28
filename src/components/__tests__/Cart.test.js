import { act, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component.", async () => {
  await act(async () => render(<RestaurantMenu />));
});
