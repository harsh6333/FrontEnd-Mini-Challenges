import { useState } from "react";

const questions = [
  "Do you enjoy team sports?",
  "Do you like running or endurance activities?",
  "Are you interested in individual sports?",
  "Do you prefer indoor or outdoor sports?",
  "Are you a fan of water sports?",
  "Do you like racket sports?",
];

const YourSport = () => {
  const [Index, setIndex] = useState(0);
  const [newArray, setNewArray] = useState<
    { question: String; Answer: String }[]
  >([]);
  const YesFunc = () => {
    if (Index == 0) {
      setNewArray([]);
    }
    if (Index > 5) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
      setNewArray((prevArray) => [
        ...prevArray,
        { question: questions[Index], Answer: "Yes" },
      ]);
    }
  };
  const NoFunc = () => {
    if (Index == 0) {
      setNewArray([]);
    }
    if (Index > 5) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
      setNewArray((prevArray) => [
        ...prevArray,
        { question: questions[Index], Answer: "No" },
      ]);
    }
  };
  const calculateNaturalSport = () => {
    if (newArray[0].Answer === "Yes" && newArray[1].Answer === "Yes") {
      return "Soccer";
    } else if (newArray[2].Answer === "Yes" && newArray[3].Answer === "Yes") {
      return "Table Tennis";
    } else if (newArray[4].Answer === "Yes") {
      return "Swimming";
    } else if (newArray[5].Answer === "Yes") {
      return "Tennis";
    } else {
      return "Running";
    }
  };

  return (
    <div className="flex h-[100vh] flex-col gap-4 w-full justify-center items-center">
      <p className="text-xl font-bold">{questions[Index]}</p>
      {Index < 6 && (
        <div className="flex gap-4">
          <button onClick={() => YesFunc()} className="border-2 p-1 w-[80px] rounded-lg bg-blue-500"
          >  Yes </button>
          <button onClick={() => NoFunc()} className="border-2 p-1 w-[80px] rounded-lg bg-blue-500"
          > No</button>
        </div>
      )}

      <p className="text-black">
        {Index > 5 && (
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-xl font-bold">{calculateNaturalSport()}</p>
            <button  className="text-lg font-bold border-2 p-2 rounded-lg w-[100px] bg-green-500"  onClick={() => setIndex(0)}
            > Restart</button>
          </div>
        )}
      </p>
    </div>
  );
};

export default YourSport;
