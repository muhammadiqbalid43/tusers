import Home from "@/pages";
import { render, screen } from "@testing-library/react";

describe("Home Component", () => {
  it("should test if home component is rendered", () => {
    render(<Home />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
