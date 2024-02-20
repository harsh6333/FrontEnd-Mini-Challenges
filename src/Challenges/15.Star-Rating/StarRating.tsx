import { useState } from "react";

const StarRating = () => {
  const [filled, setFilled] = useState([false, false, false, false, false]);
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);

  const MouseOver = (index: number) => {
    const newFilled = filled.map((_, i) => i <= index);
    setFilled(newFilled);
  };

  const MouseLeave = () => {
    const newFilled = filled.map((_, i) => i <= lastClickedIndex);
    setFilled(newFilled);
    // console.log(newFilled);
  };

  const handleClick = (index: number) => {
    setLastClickedIndex(index);
  };
  // console.log(filled);
//   console.log(lastClickedIndex);

  return (
    <div className="flex justify-center items-center mt-10">
      {filled.map((isFilled, index) => (
        <span
          key={index}
          onMouseOver={() => MouseOver(index)}
          onMouseLeave={() => MouseLeave()}
          onClick={() => handleClick(index)}
          className="text-3xl"
        >
          {isFilled ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
