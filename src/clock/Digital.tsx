type DigitalProps = {
    time: Date;
}

export function Digital({ time }: DigitalProps) {
    return <h2>Digital: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>;
}
