import { useCallback, useRef, useState } from 'react';
import './App.css'
import { Greeting } from './components/Greeting/Greeting'
import { TravelSteps } from './components/TravelSteps/TravelSteps';

function App() {

  const [isStarted, setIsStarted] = useState(false);

  const stepOneRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    setIsStarted(true);

    setTimeout(() => {
      stepOneRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  }, []);

  return (
    <div className='app'>
      <Greeting handleStart={handleStart} />
  
      {isStarted && (
        <TravelSteps stepOneRef={stepOneRef} />
      )}
    </div>
  )
}

export default App
