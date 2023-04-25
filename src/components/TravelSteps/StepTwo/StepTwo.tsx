import s from "./StepTwo.module.css";
import toolsIcon from "../../../assets/tools.svg";
import { quiz2 } from "../../../shared/data";
import { CustomImage } from "../../CustomImage/CustomImage";

export const StepTwo = () => {
  return (
    <div className={s.stepTwo}>
      <h2>Чем маркетинг отличается от интернет-маркетинга</h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        itaque, at sunt atque quasi odit alias velit laboriosam quas soluta
        dolorem iste fuga similique tempora, deleniti inventore unde delectus!
        Rerum!
      </p>

      <CustomImage />

      <p>
        Для описания маркетинга - Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Obcaecati itaque, at sunt atque quasi odit alias velit
        laboriosam quas soluta dolorem iste fuga similique tempora, deleniti
        inventore unde delectus! Rerum!{" "}
      </p>

      <ul>
        <li>Blbabab 1</li>
        <li>lblalal 2</li>
        <li>Blakldka 3</li>
      </ul>

      <p>Поэтому Lorem ipsum, dolor sit amet conse:</p>

      <p className={s.desc}>
        Маркетинг - Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Obcaecati itaque, at sunt atque quasi odit alias velit
      </p>

      <p>
        А теперь найди отличия Lorem ipsum, dolor sit amet consectetur
        adipisicing elit
      </p>

      <div className={s.quiz}>
        <div className={s.top}>
          <h3>
            <img src={toolsIcon} alt="Tools" /> <span>Задание</span>
          </h3>
          <p>Что такое интернет-маркетинг?</p>
          <p>Выбери один верный ответ.</p>
        </div>
        <div className={s.options}>
          {quiz2.questions.map((question) => {
            return (
              <div key={question.id} className={s.option}>
                <div>
                  <button className={s.circle} />
                  <span>{question.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        <button disabled className={s.answerBtn}>
          Узнать ответь
        </button>
      </div>
    </div>
  );
};
