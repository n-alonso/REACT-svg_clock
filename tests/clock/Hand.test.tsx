import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Hand } from "../../src/clock";

describe('Clock Hand', () => {
    test('Renders a line', () => {
        const { container } = render(<svg>
            <Hand stroke="red" strokeWidth={2} time={0} length={100} />
        </svg>);

        expect(document.querySelector('line')).toBeInTheDocument();
    });

    test('Applies correct stroke properties', () => {
        const { container } = render(<svg>
            <Hand stroke="blue" strokeWidth={5} time={0} length={100} />
        </svg>);
        
        const line = container.querySelector('line');
        expect(line).toHaveAttribute('stroke', 'blue');
        expect(line).toHaveAttribute('stroke-width', '5');
    });

    test('Starts from the center', () => {
        const { container } = render(<svg>
            <Hand stroke="blue" strokeWidth={5} time={0} length={100} />
        </svg>);
        
        const line = container.querySelector('line');
        expect(line).toHaveAttribute('x1', '250');
        expect(line).toHaveAttribute('y1', '250');
    });

    test('Correct position at 12', () => {
        const { container } = render(<svg>
            <Hand stroke="blue" strokeWidth={5} time={0} length={100} />
        </svg>);
        
        const line = container.querySelector('line');
        expect(line).toHaveAttribute('x2', '250');
        expect(line).toHaveAttribute('y2', '150'); // 250 available space - 100 length
    });
});