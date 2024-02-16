import { useState } from "react";

const TableColorizer = () => {
  const [colored, setColored] = useState<number[]>([]);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-orange-500",
  ];
  const ColorFunc = (number: number) => {
    setColored((prevColored) => {
      if (prevColored.includes(number)) {
        return prevColored.filter((n) => n !== number);
      } else {
        return [...prevColored, number];
      }
    });
  };
  const random = Math.floor(Math.random() * colors.length);
  const randomcolor = colors[random];

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <p className="mb-4 font-bold">COLOR ME</p>

      <div className="border-2 h-[200px] grid grid-cols-3 w-[250px]">
        {numbers.map((n, indx) => (
          <button
            key={indx}
            onClick={() => ColorFunc(n)}
            className={`border-2 flex justify-center items-center ${
              colored.includes(n) && `${randomcolor}`
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <p className="mt-4 font-semibold">
        Double tap to remove color from a box
      </p>
    </div>
  );
};

export default TableColorizer;
