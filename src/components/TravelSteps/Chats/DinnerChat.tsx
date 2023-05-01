import { useRef, useState } from "react";
import { BlackButton } from "../../BlackButton/BlackButton";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";

import s from "./Chat.module.css";

export const DinnerChat = () => {
  const [showContent, setShowContent] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setShowContent(true);

    setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  };

  return (
    <div className={s.wrapper}>
      <MyMessage text="Сообщение" />

      <BlackButton handleClick={handleStart} text="Кнопка" />

      {showContent && (
        <div ref={contentRef}>
          <UserOneMessage text="Ну и конечно..." />
          <MyMessage text="И я всему этому научусь?" />
          <UserOneMessage text="Ты уже учишься" />
          <UserTwoMessage text="О, Илья!" />
        </div>
      )}
    </div>
  );
};
