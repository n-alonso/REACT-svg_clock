export default function Digital({ time }: { time: Date }) {
    return <h2>{`Digital: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</h2>;
}
