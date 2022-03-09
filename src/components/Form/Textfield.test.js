import { render, screen } from "@testing-library/react";
import { Textfield } from "./Textfield";

describe("Textfield Component", () => {
    it("render input value", () => {
        render(
            <Textfield
                label="Username"
                type="text"
                placeholder="johnny"
                value="bela"
            />
        );
        const input = screen.queryByLabelText("Username");

        expect(input).toBeTruthy();
        expect(input.value === "bela").toBeTruthy();
    });

    it("render error", () => {
        render(
            <Textfield
                label="Username"
                type="text"
                placeholder="johnny"
                error="there-is-error"
            />
        );
        const text = screen.getByTestId("textfield-error");
        expect(text).toHaveTextContent("there-is-error");
    });
});
