import s from "./TravelSteps.module.css";
import { useState } from "react";
import { DinnerChat } from "./Chats/DinnerChat";
import { Practic } from "./Practic/Practic";
import { BlackButton } from "../BlackButton/BlackButton";
import { ChatWithWorkers } from "./Chats/ChatWithWorkers";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>,
  handleComplete: () => void;
};

export const TravelSteps = (
  { 
    stepOneRef,
    handleComplete 
  }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat currentStep={1} stepsDone={stepsDone} setStepsDone={setStepsDone} />
      </section>
      {
      stepsDone > 1 && (
        <ChatWithWorkers currentStep={2} stepsDone={stepsDone} setStepsDone={setStepsDone}/>
      )}
      {
        stepsDone > 2 && (()=>handleComplete())
      }
    </>
  );
};
