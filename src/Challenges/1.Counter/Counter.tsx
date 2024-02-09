import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [IncDecValue, setIncDecValue] = useState<number>(0);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIncDecValue(parseInt(e.target.value, 10));
  };
  const handleIncrement = () => {
    setValue((prevValue) => prevValue + IncDecValue);
  };
  const handleDecrement = () => {
    setValue((prevValue) => prevValue - IncDecValue);
  };
  const handleReset = () => {
    setValue(0);
    setIncDecValue(0);
  };
  console.log(IncDecValue);

  return (
    <div className="flex flex-col justify-center gap-4 items-center h-[100%] w-[100%]">
      <h1 className="text-2xl font-bold text-red-700 mt-8">{value}</h1>
      <div className="flex gap-4">
        <button
          className="border-2 bg-slate-400 h-[25px] w-[25px] flex items-center justify-center text-xl m-0 p-0 font-bold"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="border-2 bg-slate-400 h-[25px] w-[25px] flex items-center justify-center text-lg m-0 p-0 font-bold"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <h1>Increment/Decrement By</h1>
        <input
          type="number"
          value={IncDecValue}
          onChange={handleValueChange}
          className="border-2 border-black p-2"
        />
      </div>
      <button
        className="border-2 pr-4 pl-4 p-1 bg-slate-300"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
