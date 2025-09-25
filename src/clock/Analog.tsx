import { Hand } from "./Hand";

type AnalogProps = {
    time: Date;
}

export function Analog({ time }: AnalogProps) {
    // Analog clocks display only 12h, calculatePosition() handles 0-59 (60) values
    const hours12 = time.getHours() % 12;
    const hoursToCalculate = (hours12 * 60) / 12;

    return <>
        <h2>Analog:</h2>
        <svg width={500} height={500}>
            <circle 
                cx={250} cy={250} r={200} 
                stroke='black' stroke-width="5" 
                fill='transparent'
            ></circle>
            <circle 
                cx={250} cy={250} r={5} 
                fill='black'
            ></circle>
            <Hand stroke="blue" strokeWidth={5} time={hoursToCalculate} length={120} />
            <Hand stroke="green" strokeWidth={4} time={time.getMinutes()} length={160} />
            <Hand stroke="yellow" strokeWidth={1} time={time.getSeconds()} length={180} />
        </svg>
    </>
}
