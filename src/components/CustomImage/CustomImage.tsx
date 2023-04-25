import defaultImg from "../../assets/marketing1.png";

export const CustomImage = ({ src = defaultImg }) => {
  return (
    <img
      style={{ width: "100%", maxWidth: 300, margin: "20px 0;" }}
      src={src}
      alt="Marketing"
    />
  );
};
