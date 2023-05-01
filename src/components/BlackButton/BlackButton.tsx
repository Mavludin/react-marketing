import { useState } from "react";
import s from "./BlackButton.module.css";

type Props = {
  handleClick: () => void;
  text: string;
  shouldDisappear?: boolean;
  interval?: number;
};

export const BlackButton = ({
  handleClick,
  text,
  shouldDisappear = false,
  interval = 0,
}: Props) => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    if (shouldDisappear) {
      setTimeout(() => {
        setShow(false);
      }, interval);
    }

    handleClick();
  };

  return (
    <>
      {show && (
        <button className={s.button} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};
