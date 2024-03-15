import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Page from "@/app/page";
import { ThemeProvider } from "./context/ThemeContext";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

describe("Page Component", () => {
  it("matches snapshot", () => {
    // Render the Page component
    const tree = renderer
      .create(
        <ThemeProvider>
          <Page />
        </ThemeProvider>
      )
      .toJSON();

    // Compare the rendered component with a snapshot
    expect(tree).toMatchSnapshot();
  });
});
