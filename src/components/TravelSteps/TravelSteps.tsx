import s from "./TravelSteps.module.css";
import { useState } from "react";
import { DinnerChat } from "./Chats/DinnerChat";
import { Practic } from "./Practic/Practic";
import { ChatWithWorkers } from "./Chats/ChatWithWorkers";

type Props = {
  practicRef: React.RefObject<HTMLDivElement>;
  stepOneRef: React.RefObject<HTMLDivElement>,
  handleComplete: () => void;
};

export const TravelSteps = ({ practicRef, stepOneRef, handleComplete }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat
          currentStep={1}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
        />
      </section>
      {stepsDone > 1 && (
        <ChatWithWorkers
          currentStep={2}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
        />
      )}
      {stepsDone > 2 && <Practic practicRef={practicRef} />}
    </>
  );
};
