import s from "./BlackButton.module.css";

type Props = {
  handleClick: () => void;
  text: string;
};

export const BlackButton = ({ handleClick, text }: Props) => {
  return (
    <button className={s.button} onClick={handleClick}>
      {text}
    </button>
  );
};
