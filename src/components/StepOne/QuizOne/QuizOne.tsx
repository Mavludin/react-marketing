import s from "./QuizOne.module.css";
import toolsIcon from "../../../assets/tools.svg";
import { useState } from "react";
import { quiz1 } from "../../../shared/data";

export const QuizOne = () => {
  const [answerNumber, setAnswerNumber] = useState(-1);
  const [isDone, setIsDone] = useState(false);

  return (
    <div className={s.testOne}>
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
              isDone &&
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
                {isDone && <p>{question.comment}</p>}
              </div>
            );
          })}
        </div>
        <button onClick={() => setIsDone(true)} className={s.answerBtn}>
          Узнать ответь
        </button>
        {isDone && (
          <p>
            Теперь ты лучше понимаешь, что такое интернет-маркетинг. Но чтобы
            решить реальные задачи, нужно глубже разобраться в этой теме.
            Поэтому сейчас поговорим о классическом маркетинге и расскажем, чем
            он отличается от интернет-маркетинга.
          </p>
        )}
      </div>
    </div>
  );
};
