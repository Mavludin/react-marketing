import { useRef, useState } from 'react';
import './App.css'
import { Greeting } from './components/Greeting/Greeting'
import { StepOne } from './components/StepOne/StepOne';

function App() {

  const [stepNumber, setStepNumber] = useState(0);

  const stepOneRef = useRef<HTMLDivElement>(null);

  const onToFirst = () => {
    setStepNumber(1);

    setTimeout(() => {
      stepOneRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  }

  return (
    <div className='app'>
      <Greeting onToFirst={onToFirst} />
      {stepNumber === 1 && (
        <StepOne stepOneRef={stepOneRef} />
      )}
    </div>
  )
}

export default App
