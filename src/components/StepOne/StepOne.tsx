import s from "./StepOne.module.css";
import avatar from "../../assets/avatar.png";
import { TestOne } from "./TestOne/TestOne";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const StepOne = ({ stepOneRef }: Props) => {
  return (
    <section ref={stepOneRef} className={s.stepOne}>
      <div className={s.message}>
        <span>Аллахверди</span>
        <div className={s.inner}>
          <span>Отправиться в путешествие</span>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <TestOne />
    </section>
  );
};
