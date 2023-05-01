import s from "./UserOneMessage.module.css";
import avatar from "../../assets/woman_avatar.png";

type Props = {
  userName?: string;
  text: string;
};

export const UserOneMessage = ({ userName = "Эмма", text }: Props) => {
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
