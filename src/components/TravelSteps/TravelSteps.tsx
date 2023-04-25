import s from "./TravelSteps.module.css";
import avatar from "../../assets/avatar.png";
import { StepOne } from "./StepOne/StepOne";
import { StepTwo } from "./StepTwo/StepTwo";
import { useState } from "react";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <div className={s.message}>
          <span>Аллахверди</span>
          <div className={s.inner}>
            <span>Отправиться в путешествие</span>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <StepOne stepsDone={stepsDone} setStepsDone={setStepsDone} />
      </section>
      {/* {stepsDone > 0 && <StepTwo />} */}
    </>
  );
};
