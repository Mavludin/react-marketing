import { CustomImage } from '../CustomImage/CustomImage';
import s from './Greeting.module.css';

type Props = {
  handleStart: () => void;
}

export const Greeting = ({ handleStart }: Props) => {
  return (
    <section className={s.greeting}>
      <h1>Урок 1. Что такое интернет-маркетинг</h1>
      <h2>Привет!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsam doloremque cupiditate pariatur similique rerum unde praesentium dicta doloribus eius eveniet earum repudiandae nobis, ipsum, quibusdam dolore recusandae sit dolorum?
      </p>
      <CustomImage />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsam doloremque cupiditate pariatur similique rerum unde praesentium dicta doloribus eius eveniet earum repudiandae nobis, ipsum, quibusdam dolore recusandae sit dolorum?
      </p>
      <button onClick={handleStart}>Отправиться в путешествие!</button>
    </section>
  )
}
