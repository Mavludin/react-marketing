import s from "./Chat.module.css";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";

export const Chat = () => {
  return (
    <section className={s.wrapper}>
      <MyMessage text="А за что именно?" />
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
    </section>
  );
};
