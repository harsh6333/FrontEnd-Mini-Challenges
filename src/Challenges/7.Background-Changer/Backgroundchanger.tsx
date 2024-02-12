import { useState } from "react";

const Backgroundchanger = () => {
const getRandomColor = () => {
  const randomHue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${randomHue}, 100%, 50%)`;

  return randomColor;
};
const [color, setColor] = useState<string>(getRandomColor());

const newColor = () => {
  setColor(getRandomColor());
};

  return (
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: color, width: "100%", height: "100vh" }}
    >
      <button className="bg-white border-2 p-2 rounded-xl font-bold" onClick={() => newColor()}>
        Change Color!! 😎😎😎😎😎
      </button>
    </div>
  );
};

export default Backgroundchanger;
