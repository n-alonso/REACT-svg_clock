import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Digital } from "../../src/clock";

describe('Digital Clock', () => {
    test('Displays time correctly', () => {
        const testTime = new Date("2025-09-26T13:23:57");
        render(<Digital time={testTime} />);

        expect(screen.getByText("Digital: 13:23:57")).toBeInTheDocument();
    });

    test('Pads to 2 digits with 0s', () => {
        const testTime = new Date("2025-09-26T01:01:01");
        render(<Digital time={testTime} />);

        expect(screen.getByText('Digital: 01:01:01')).toBeInTheDocument();
    });

    test('Handles midnight correctly', () => {
        const testDate = new Date('2023-01-01T00:00:00')
        render(<Digital time={testDate} />)
        
        expect(screen.getByText('Digital: 00:00:00')).toBeInTheDocument()
    });

    test('Handles noon correctly', () => {
        const testDate = new Date('2023-01-01T12:00:00')
        render(<Digital time={testDate} />)
        
        expect(screen.getByText('Digital: 12:00:00')).toBeInTheDocument()
    });
});
