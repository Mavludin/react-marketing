import s from "./TravelSteps.module.css";
import avatar from "../../assets/avatar.png";
import { StepOne } from "./StepOne/StepOne";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {
  return (
    <section ref={stepOneRef} className={s.stepOne}>
      <div className={s.message}>
        <span>Аллахверди</span>
        <div className={s.inner}>
          <span>Отправиться в путешествие</span>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <StepOne />
    </section>
  );
};
