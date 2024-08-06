import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "..";


describe("Button Component", () => {
    const onClick = jest.fn();
    test("should show the correct button", () => {
        render(<Button text="Test" type='submit' className='w-full' onClick={onClick} disabled={false} />);
        const button = screen.getByText("Test");
        expect(button).toBeInTheDocument();
    });
});
