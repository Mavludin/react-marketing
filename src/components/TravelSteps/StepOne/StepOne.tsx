import s from "./StepOne.module.css";
import { useState } from "react";
import { quiz1 } from "../../../shared/data";
import { CustomQuiz } from "../../CustomQuiz/CustomQuiz";

type Props = {
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

const PREV_STEP = 0;

export const StepOne = ({ stepsDone, setStepsDone }: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  const handleSelection = (index: number) => {
    if (stepsDone > PREV_STEP) return;

    setAnswerNumber(index);
  };

  return (
    <div className={s.stepOne}>
      <div className={s.top}>
        <p>Предлагаю сразу начать с практики.</p>
        <p>Попробуй ответить на вопрос.</p>
      </div>

      <CustomQuiz
        title="Что такое интернет-маркетинг?"
        subtitle="Выбери один верный ответ."
        quizData={quiz1}
        prevStep={PREV_STEP}
        stepsDone={stepsDone}
        setStepsDone={setStepsDone}
        answerNumber={answerNumber}
        handleSelection={handleSelection}
      />
      {stepsDone > PREV_STEP && (
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
