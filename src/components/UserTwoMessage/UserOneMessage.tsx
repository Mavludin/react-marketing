import s from "./UserTwoMessage.module.css";
import avatar from "../../assets/mark_avatar.png";

type Props = {
  userName?: string;
  text: string;
};

export const UserTwoMessage = ({ userName = "Марк", text }: Props) => {
  return (
    <div className={s.message}>
      <span>{userName}</span>
      <div className={s.inner}>
        <img src={avatar} alt="avatar" />
        <span>{text}</span>
      </div>
    </div>
  );
};
