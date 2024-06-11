import s from "./TravelSteps.module.css";
import { DinnerChat } from "./Chats/DinnerChat";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <DinnerChat />
      </section>
    </>
  );
};
