import Hand from "./Hand";

export default function Analog({ time }: { time: Date }) {
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
            <Hand stroke="blue" strokeWidth={5} time={time.getHours()} length={120} />
            <Hand stroke="green" strokeWidth={4} time={time.getMinutes()} length={160} />
            <Hand stroke="yellow" strokeWidth={1} time={time.getSeconds()} length={180} />
        </svg>
    </>
}
