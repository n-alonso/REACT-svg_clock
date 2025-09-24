import { useEffect, useState } from 'react'
import './App.css'
import Digital from './clock/Digital';
import Analog from './clock/Analog';

function App() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Time App</h1>
      <Analog time={time} />
      <Digital time={time} />
    </>
  )
}

export default App
