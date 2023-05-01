import { BlackButton } from "../../BlackButton/BlackButton";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";
import s from "./Chat.module.css";

export const ChatWithCoworker = () => {
  return (
    <div className={s.wrapper}>
      <h2>sdlksld</h2>
      <p>asmdnasm,dnamsndmsandmsnad</p>
      <ul>
        <li>123</li>
        <li>12313</li>
        <li>123123</li>
      </ul>
      <UserOneMessage text="Ну и конечно..." />
      <MyMessage text="И я всему этому научусь?" />
      <UserOneMessage text="Ты уже учишься" />
      <UserTwoMessage text="О, Илья!" />
      <BlackButton handleClick={() => null} text="Кнопка" />
    </div>
  );
};
