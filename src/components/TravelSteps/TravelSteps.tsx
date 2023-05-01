import s from "./TravelSteps.module.css";
import { useState } from "react";
import { DinnerChat } from "./Chats/DinnerChat";
import { BlackButton } from "../BlackButton/BlackButton";
import { ChatWithWorkers } from "./Chats/ChatWithWorkers";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {
  const [step, setStep] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat />
        {/* <ChatWithWorkers handleStart={handleStart} /> */}
      </section>
    </>
  );
};
