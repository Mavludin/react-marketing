import s from "./Chat.module.css";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";
import { BlackButton } from "../../BlackButton/BlackButton";

export const Chat = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={s.wrapper}>
      {children}
    </section>
  );
};
