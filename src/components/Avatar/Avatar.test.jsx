import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Avatar } from "..";

describe("Avatar Component", () => {
    test("should show the correct avatar", () => {
        render(<Avatar username="test" size="h-12 w-12" />);
        const avatar = screen.getByText("TE");
        expect(avatar).toBeInTheDocument();
    });
});
