import s from "./CustomQuiz.module.css";
import toolsIcon from "../../assets/tools.svg";
import { Quiz } from "../../shared/data";

type Props = {
  title: string;
  subtitle: string;
  quizData: Quiz;
  prevStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
  answerNumber: number;
  handleSelection: (index: number) => void;
};

export const CustomQuiz = ({
  title,
  subtitle,
  quizData,
  prevStep,
  stepsDone,
  setStepsDone,
  answerNumber,
  handleSelection,
}: Props) => {
  return (
    <div className={s.quiz}>
      <div className={s.quizTop}>
        <h3>
          <img src={toolsIcon} alt="Tools" /> <span>Задание</span>
        </h3>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className={s.options}>
        {quizData.questions.map((question, index) => {
          const isRightAnswer = stepsDone > prevStep && index === quizData.answerIndex;

          const isSelectedRightAnswer =
            stepsDone > prevStep &&
            answerNumber === index &&
            answerNumber === quizData.answerIndex;

          const isSelected = answerNumber === index;

          const selectedStyles = isSelected ? s.blackCircle : "";
          const circleStyles = isSelectedRightAnswer
            ? s.greenCircle
            : selectedStyles;

          return (
            <div key={question.id} className={s.option}>
              <div onClick={() => handleSelection(index)}>
                <button className={`${s.circle} ${circleStyles}`}>
                  {answerNumber === index ? "✓" : ""}
                </button>
                <span>{question.text}</span>
              </div>
              {stepsDone > prevStep && (
                <p
                  className={`${s.comment} ${
                    isRightAnswer ? s.greenComment : s.redComment
                  }`}
                >
                  {question.comment}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <button
        disabled={answerNumber === -1}
        onClick={() => setStepsDone(prevStep + 1)}
        className={s.answerBtn}
      >
        Узнать ответь
      </button>
    </div>
  );
};
