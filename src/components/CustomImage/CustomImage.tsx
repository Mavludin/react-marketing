import { useState } from 'react';

import Lightbox from 'react-18-image-lightbox';
import defaultImg from "../../assets/marketing1.png";
import 'react-18-image-lightbox/style.css';
import s from './CustomImage.module.css';

export const CustomImage = ({ src = defaultImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.imageBlock}>
      <img
        src={src}
        alt="Marketing"
      />
      <p>Чтобы увеличить картинку туда сюда. Чтобы увеличить картинку туда сюда</p>
      {/* {isOpen && (
        <Lightbox mainSrc={require('../../assets/marketing1.png')} onCloseRequest={() => setIsOpen(false)} />
      )} */}
    </div>
  );
};
