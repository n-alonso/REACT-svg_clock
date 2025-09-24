export default function Hand({
    stroke, 
    strokeWidth,
    time,
    length
}: {
    stroke: string,
    strokeWidth: number,
    time: number,
    length: number
}) {
    const center: number = 250;
    const handLength: number = length;

    function calculatePosition(): number[] {
        /**
         * Convert 0-59 time unit to angle in radians
         * - Angle = 6 degrees per unit of time (360 degrees/60 time)
         * - Radians = angle * (PI / 180)
         */
        const radians: number = (time * 6) * (Math.PI / 180);
        const x2 = center + (handLength * Math.sin(radians));
        const y2 = center - (handLength * Math.cos(radians)); // Subtract because SVG y axis increases downwards

        return [x2, y2];
    }

    return <line 
        x1={center}
        y1={center}
        x2={calculatePosition()[0]}
        y2={calculatePosition()[1]}
        stroke={stroke}
        stroke-width={strokeWidth}
    />
}
