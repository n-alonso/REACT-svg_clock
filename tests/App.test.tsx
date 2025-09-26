import { render,screen } from "@testing-library/react";
import { afterAll, beforeEach, describe, expect, test, vi } from "vitest";
import { App } from '../src/App';
import { act } from "react";

describe('App', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterAll(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    test('Renders main heading', () => {
        render(<App />);
        expect(screen.getByText('Time App')).toBeInTheDocument();
    });

    test('Renders both clock types', () => {
        render(<App />);
        expect(screen.getByText('Analog:')).toBeInTheDocument();
        expect(screen.getByText(/Digital:/)).toBeInTheDocument();
    });

    test('Uses correct time', () => {
        vi.setSystemTime(new Date('2023-10-15T14:30:25'));
        
        render(<App />);
        expect(screen.getByText(/14:30:25/)).toBeInTheDocument();
    });

    test('Updates time', () => {
        vi.setSystemTime(new Date('2023-10-15T14:30:00'));
        
        render(<App />);
        expect(screen.getByText(/14:30:00/)).toBeInTheDocument();
        
        act(() => vi.advanceTimersByTime(1000));
        expect(screen.getByText(/14:30:01/)).toBeInTheDocument();
    });
});
