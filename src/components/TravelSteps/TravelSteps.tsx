import s from "./TravelSteps.module.css";
import { WhatIsInternetMarketing } from "./WhatIsInternetMarketing";
import { useState } from "react";
import { MyMessage } from "../MyMessage/MyMessage";
import { MarketingDifference } from "./MarketingDifference/MarketingDifference";
import { Chat } from "./Chat";
import { ChatWithWorkers } from "./Chat/chats/ChatWithWorkers";

type Props = {
  stepOneRef: React.RefObject<HTMLDivElement>;
};

export const TravelSteps = ({ stepOneRef }: Props) => {
  const [stepsDone, setStepsDone] = useState(0);

  return (
    <>
      <section ref={stepOneRef} className={s.travel}>
        <MyMessage text="Отправиться в путешествие" />
        <WhatIsInternetMarketing
          currentStep={0}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
        />
      </section>
      {stepsDone > 0 && (
        <MarketingDifference
          currentStep={1}
          stepsDone={stepsDone}
          setStepsDone={setStepsDone}
        />
      )}
      {stepsDone > 1 && (
        <Chat>
          <ChatWithWorkers />
        </Chat>
      )}
    </>
  );
};
