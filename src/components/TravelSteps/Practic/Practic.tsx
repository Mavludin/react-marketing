import { quiz1 } from "../../../shared/data";
import s from "./Practic.module.css";
import { useState } from "react";

type Props = {
  currentStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

export const Practic = ({
  currentStep,
  stepsDone,
  setStepsDone,
}: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <p>Предлагаю сразу начать с практики.</p>
        <p>Попробуй ответить на вопрос.</p>
      </div>

      {stepsDone > currentStep && (
        <p>
          Теперь ты лучше понимаешь, что такое интернет-маркетинг. Но чтобы
          решить реальные задачи, нужно глубже разобраться в этой теме. Поэтому
          сейчас поговорим о классическом маркетинге и расскажем, чем он
          отличается от интернет-маркетинга.
        </p>
      )}
    </div>
  );
};
