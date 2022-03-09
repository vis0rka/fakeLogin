import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./Errormessage";

describe("Textfield Component", () => {
    it("render error message", () => {
        render(
            <ErrorMessage/>
        );
        const message = screen.getByText('Sorry, something went wrong');

        expect(message).toBeTruthy();

    });

    it("render error message children", () => {
        render(
            <ErrorMessage>
                Some other error 
            </ErrorMessage>
        );
        const message = screen.getByText('Some other error');

        expect(message).toBeTruthy();
    });
});
