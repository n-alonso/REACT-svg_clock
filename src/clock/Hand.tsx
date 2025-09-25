type HandProps = {
    stroke: string,
    strokeWidth: number,
    time: number,
    length: number,
}

const center = 250;

function calculatePosition(timeUnit: number, handLength: number) {
    /**
     * Convert 0-59 time unit to angle in radians
     * - Angle = 6 degrees per unit of time (360 degrees/60 time)
     * - Radians = angle * (PI / 180)
     */
    const radians = (timeUnit * 6) * (Math.PI / 180);
    const x = center + (handLength * Math.sin(radians));
    const y = center - (handLength * Math.cos(radians)); // Subtract because SVG y axis increases downwards

    return { x, y };
}

export function Hand({
    stroke, 
    strokeWidth,
    time,
    length
}: HandProps) {
    const { x, y } = calculatePosition(time, length);

    return <line 
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        stroke={stroke}
        stroke-width={strokeWidth}
    />
}
