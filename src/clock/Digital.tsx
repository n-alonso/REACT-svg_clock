type DigitalProps = {
    time: Date;
}

export function Digital({ time }: DigitalProps) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    
    return <h2>Digital: {hours}:{minutes}:{seconds}</h2>;
}
