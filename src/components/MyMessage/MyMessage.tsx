import s from "./MyMessage.module.css";
import avatar from "../../assets/avatar.png";

type Props = {
  text: string;
};

export const MyMessage = ({ text }: Props) => {
  return (
    <div className={s.message}>
      <span>Аллахверди</span>
      <div className={s.inner}>
        <span>{text}</span>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
