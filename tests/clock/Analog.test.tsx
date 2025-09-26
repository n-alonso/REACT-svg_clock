import { describe, expect, test } from "vitest";
import { Analog } from "../../src/clock";
import { render, screen } from "@testing-library/react";

describe('Analog clock', ()=> {
    test('Renders title', () => {
        const testDate = new Date('2023-10-15T14:30:45');
        render(<Analog time={testDate} />);
        
        expect(screen.getByText('Analog:')).toBeInTheDocument();
    });

    test('Has right width and length', () => {
        const testDate = new Date('2023-10-15T14:30:45');
        const { container } = render(<Analog time={testDate} />);
        
        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '500');
    });

    test('Renders clock elements', () => {
        const testDate = new Date('2023-10-15T14:30:45');
        const { container } = render(<Analog time={testDate} />);
        
        const circles = container.querySelectorAll('circle');
        expect(circles).toHaveLength(2); // Clock itself and center
        
        const clockFace = circles[0];
        expect(clockFace).toHaveAttribute('cx', '250');
        expect(clockFace).toHaveAttribute('cy', '250') ;
    });

    test('Renders all hands', () => {
        const testDate = new Date('2023-10-15T14:30:45');
        const { container } = render(<Analog time={testDate} />);
        
        const lines = container.querySelectorAll('line');
        expect(lines).toHaveLength(3);
    });

    test('Hands have the correct color', () => {
        const testDate = new Date('2023-10-15T14:30:45');
        const { container } = render(<Analog time={testDate} />);
        
        const lines = container.querySelectorAll('line');
        const strokes = Array.from(lines).map(line => line.getAttribute('stroke'));
        
        expect(strokes).toContain('blue');   // Hour
        expect(strokes).toContain('green');  // Minute  
        expect(strokes).toContain('yellow'); // Second
    });
});
