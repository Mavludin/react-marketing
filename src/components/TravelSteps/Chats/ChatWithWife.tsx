import { useRef, useState } from "react";

import s from "./Chat.module.css";
import { MyMessage } from "../../MyMessage/MyMessage";
import { BlackButton } from "../../BlackButton/BlackButton";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";

export const ChatWithWife = () => {
  const [showSecondPart, setShowSecondPart] = useState(false);
  const secondPartRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    setShowSecondPart(true);

    setTimeout(() => {
      secondPartRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <div className={s.wrapper}>
      <MyMessage text="А за что именно?" />

      <BlackButton handleClick={scrollDown} text="Название" />

      {showSecondPart && (
        <div ref={secondPartRef}>
          <p>Lorem 1111:</p>
          <ul>
            <li>Blbabab 1</li>
            <li>lblalal 2</li>
            <li>Blakldka 3</li>
          </ul>
          <UserOneMessage text="Ну и конечно..." />
          <MyMessage text="И я всему этому научусь?" />
          <UserOneMessage text="Ты уже учишься" />
          <UserTwoMessage text="О, Илья!" />
        </div>
      )}
    </div>
  );
};
