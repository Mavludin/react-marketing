import { useCallback, useRef, useState } from 'react';
import { Greeting } from './components/Greeting/Greeting'
import { TravelSteps } from './components/TravelSteps/TravelSteps';
import { MobileOnlyPlaceholder } from './components/MobileOnlyPlaceholder/MobileOnlyPlaceholder';

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
      <main>
        <Greeting handleStart={handleStart} />
    
        {isStarted && (
          <TravelSteps stepOneRef={stepOneRef} />
        )}
      </main>
      <MobileOnlyPlaceholder />
    </div>
  )
}

export default App
