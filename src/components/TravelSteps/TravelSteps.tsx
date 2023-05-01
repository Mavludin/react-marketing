import s from "./TravelSteps.module.css";
import { useState } from "react";
import { DinnerChat } from "./Chats/DinnerChat";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat />
      </section>
    </>
  );
};
