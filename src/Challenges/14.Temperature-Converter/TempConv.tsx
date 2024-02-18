import { useState } from "react";

const TempConv = () => {
  const [temp, setTemp] = useState<number>();
  const [convertedTemp, setConvertedTemp] = useState<number>();
  const [inputUnit, setInputUnit] = useState<string>("Celsius");
  const [outputUnit, setOutputUnit] = useState<string>("Fahrenheit");

  const convertTemperature = () => {
    if (!temp || isNaN(temp)) {
      alert("Please enter a valid temperature.");
      return;
    }

    if (inputUnit === outputUnit) {
      setConvertedTemp(Number(temp.toFixed(3)));
      return;
    }

    if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
      setConvertedTemp(Number(((temp * 9) / 5 + 32).toFixed(3)));
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
      setConvertedTemp(Number((((temp - 32) * 5) / 9).toFixed(3)));
    }
  };

  return (
    <div className="w-[90%] flex justify-center mt-10 items-center">
      <div className="shadow-md border-2 w-[80%] gap-4 flex flex-col justify-center p-4">
        <p>Enter Temperature</p>
        <div className="flex gap-2">
          <input
            className="border-[1px] border-black p-1"
            type="number"
            value={temp || ""}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            placeholder="Enter Temperature"
          />
          <select
            className="border-[1px] border-black text-sm"
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <button
          className="p-2 bg-[#0ff] w-[80px] rounded-md"
          onClick={convertTemperature}
        >
          Convert
        </button>
        <div className="w-[100%] flex justify-between items-center mt-8">
          <p>Converted Temperature: {convertedTemp}</p>
          <select
            className="border-[1px] border-black text-sm"
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TempConv;
