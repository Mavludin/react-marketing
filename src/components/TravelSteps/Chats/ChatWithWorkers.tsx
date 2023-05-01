import { BlackButton } from "../../BlackButton/BlackButton";
import { MyMessage } from "../../MyMessage/MyMessage";
import { UserOneMessage } from "../../UserOneMessage/UserOneMessage";
import { UserTwoMessage } from "../../UserTwoMessage/UserOneMessage";

import s from './Chat.module.css';

type Props = {
  currentStep: number;
  stepsDone: number;
  setStepsDone: React.Dispatch<React.SetStateAction<number>>;
};

export const ChatWithWorkers = ({
  currentStep,
  stepsDone,
  setStepsDone,
}: Props) => {

  const handleClick = () => {
    // setShowContent4(true);
    // setTimeout(() => {
    //     contentRef4.current?.scrollIntoView({ behavior: 'smooth' });
    // }, 500)

    setStepsDone(currentStep + 1)
  };


  return (
    <div className={s.wrapper}>
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
      <BlackButton handleClick={handleClick} text="Практическое задание" />
    </div>
  );
};
