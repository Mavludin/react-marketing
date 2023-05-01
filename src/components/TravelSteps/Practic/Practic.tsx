import s from "./Practic.module.css";
import { useState } from "react";

type Props = {
    practicRef: React.RefObject<HTMLDivElement>;
  };

export const Practic = ({ 
    practicRef
}: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  return (
    <div ref={practicRef} className={s.wrapper}>
      <div className={s.top}>
        <p>Предлагаю сразу начать с практики.</p>
        <p>ВЫПОЛНИ СЛЕДУЮЩЕЕ ЗАДАНИЕ.</p>
      </div>
{/* 
      {stepsDone > currentStep && (
        <p>
          Теперь ты лучше понимаешь, что такое интернет-маркетинг. Но чтобы
          решить реальные задачи, нужно глубже разобраться в этой теме. Поэтому
          сейчас поговорим о классическом маркетинге и расскажем, чем он
          отличается от интернет-маркетинга.
        </p>
      )} */}
    </div>
  );
};
