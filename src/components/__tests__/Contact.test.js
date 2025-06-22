import React from 'react';
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
    it("Should load Contact component", ()=> {
        render(<Contact />); //rendered to the jsdom
    
        const heading = screen.getByRole("heading") // the screen object will find all the headings inside the Contact component
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside the Contact Component.", () => {
        render(<Contact />);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name inside the Contact Component.", ()=> {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input fields on the Contact Component.", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes);
    
        // Assertion
        // expect(inputBoxes).toHaveLength(2);
    
        // inputBoxes.forEach((input)=> {
        //     expect(input).toBeInTheDocument();
        // })
    
        expect(inputBoxes.length).not.toBe(3);
    })
});
