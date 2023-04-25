import { useState } from 'react';

import Lightbox from 'react-18-image-lightbox';
import defaultImg from "../../assets/marketing1.png";
import 'react-18-image-lightbox/style.css';

export const CustomImage = ({ src = defaultImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img
        style={{ width: "100%", maxWidth: 300, margin: "20px 0;" }}
        src={src}
        alt="Marketing"
      />
      {/* {isOpen && (
        <Lightbox mainSrc={require('../../assets/marketing1.png')} onCloseRequest={() => setIsOpen(false)} />
      )} */}
    </>
  );
};
