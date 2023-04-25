import s from "./StepOne.module.css";
import toolsIcon from "../../../assets/tools.svg";
import { useState } from "react";
import { quiz1 } from "../../../shared/data";

type Props = {
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

export const StepOne = ({ stepsDone, setStepsDone }: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  return (
    <div className={s.stepOne}>
      <p>Предлагаю сразу начать с практики.</p>
      <p>Попробуй ответить на вопрос.</p>

      <div className={s.quiz}>
        <div className={s.top}>
          <h3>
            <img src={toolsIcon} alt="Tools" /> <span>Задание</span>
          </h3>
          <p>Что такое интернет-маркетинг?</p>
          <p>Выбери один верный ответ.</p>
        </div>
        <div className={s.options}>
          {quiz1.questions.map((question, index) => {
            const isFinished =
              stepsDone > 0 &&
              answerNumber === index &&
              answerNumber === quiz1.answerIndex;
            return (
              <div key={question.id} className={s.option}>
                <div>
                  <button
                    style={{
                      backgroundColor: isFinished ? "greenyellow" : "",
                    }}
                    onClick={() => setAnswerNumber(index)}
                    className={s.circle}
                  />
                  <span>{question.text}</span>
                </div>
                {stepsDone > 0 && <p>{question.comment}</p>}
              </div>
            );
          })}
        </div>
        <button onClick={() => setStepsDone(1)} className={s.answerBtn}>
          Узнать ответь
        </button>
      </div>
      {stepsDone > 0 && (
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
