import { quiz1 } from "../../../shared/data";
import { CustomQuiz } from "../../CustomQuiz/CustomQuiz";
import s from "./WhatIsInternetMarketing.module.css";
import { useState } from "react";

type Props = {
  currentStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

export const WhatIsInternetMarketing = ({
  currentStep,
  stepsDone,
  setStepsDone,
}: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  const handleSelection = (index: number) => {
    if (stepsDone > currentStep) return;

    setAnswerNumber(index);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <p>Предлагаю сразу начать с практики.</p>
        <p>Попробуй ответить на вопрос.</p>
      </div>

      <CustomQuiz
        title="Что такое интернет-маркетинг?"
        subtitle="Выбери один верный ответ."
        quizData={quiz1}
        currentStep={currentStep}
        stepsDone={stepsDone}
        setStepsDone={setStepsDone}
        answerNumber={answerNumber}
        handleSelection={handleSelection}
      />
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
