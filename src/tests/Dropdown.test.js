import Dropdown from "../components/Dropdown";
import App from "../App";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("[1] component renders without errors", () => {
  render(<Dropdown />);
});

test("[2] All dropdown buttons render", () => {
  render(<Dropdown />);
  const buttons = screen.queryAllByTestId("dropbtn-inner");
  expect(buttons).toBeTruthy();
});

test("[3] Dropdown buttons change the displayed pokemon", async () => {
  // I had to render App for this because it doesn't just test dropdown. Not sure what best practices is for this but it does the job.
  render(<App />);

  const fireBtn = document.querySelector("#fire-btn");
  let bulba = screen.queryByText(/bulbasaur/i);
  expect(bulba).toBeVisible();

  await userEvent.click(fireBtn);
  expect(bulba).not.toBeVisible();
});

// This test hits the button to only show water types, verifies that non-water types don't display, then hits the reset button, then verifies that all types now display again as expected.
test("[4] Reset buttons puts all pokemon back on screen", async () => {
  render(<App />);

  const waterBtn = screen.getByTestId("water-btn");
  const resetBtn = screen.getByTestId("reset-btn");
  const bulba = screen.getByText(/bulbasaur/i);
  expect(bulba).toBeVisible();

  await userEvent.click(waterBtn);
  expect(bulba).not.toBeVisible();

  const starmie = screen.getByText(/starmie/i);
  expect(starmie).toBeVisible();

  await userEvent.click(resetBtn);
  const chariz = screen.getByText(/charizard/i);
  expect(chariz).toBeVisible();
});