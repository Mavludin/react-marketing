import { quiz2 } from "../../../../shared/data";
import { CustomImage } from "../../../CustomImage/CustomImage";
import { CustomQuiz } from "../../../CustomQuiz/CustomQuiz";
import s from "./MarketingDifference.module.css";
import { useState } from "react";

type Props = {
  prevStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

export const MarketingDifference = ({
  prevStep,
  stepsDone,
  setStepsDone,
}: Props) => {
  const [answerNumber, setAnswerNumber] = useState(-1);

  const handleSelection = (index: number) => {
    if (stepsDone > prevStep) return;

    setAnswerNumber(index);
  };
  return (
    <section className={s.wrapper}>
      <h2>Чем маркетинг отличается от интернет-маркетинга</h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        itaque, at sunt atque quasi odit alias velit laboriosam quas soluta
        dolorem iste fuga similique tempora, deleniti inventore unde delectus!
        Rerum!
      </p>

      <CustomImage />

      <p>
        Для описания маркетинга - Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Obcaecati itaque, at sunt atque quasi odit alias velit
        laboriosam quas soluta dolorem iste fuga similique tempora, deleniti
        inventore unde delectus! Rerum!{" "}
      </p>

      <ul>
        <li>Blbabab 1</li>
        <li>lblalal 2</li>
        <li>Blakldka 3</li>
      </ul>

      <p>Поэтому Lorem ipsum, dolor sit amet conse:</p>

      <p className={s.desc}>
        <strong>Маркетинг</strong> - Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Obcaecati itaque, at sunt atque quasi odit alias velit
      </p>

      <p>
        А теперь найди отличия Lorem ipsum, dolor sit amet consectetur
        adipisicing elit
      </p>

      <CustomQuiz
        title="Заголовок 2"
        subtitle="Подзаголовок 2"
        quizData={quiz2}
        prevStep={prevStep}
        stepsDone={stepsDone}
        setStepsDone={setStepsDone}
        answerNumber={answerNumber}
        handleSelection={handleSelection}
      />
    </section>
  );
};
