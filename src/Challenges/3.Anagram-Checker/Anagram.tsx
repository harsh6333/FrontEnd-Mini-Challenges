import { useState } from "react";

const Anagram = () => {
  let [first, setFirst] = useState("");
  let [second, setSecond] = useState("");
  let [Anagram, setAnagram] = useState<boolean>();
  const CheckAnagram = () => {
    first = first.split("").sort().join("");
    second = second.split("").sort().join("");
    if (first === second) {
      setAnagram(true);
    }
    if (first !== second) {
      setAnagram(false);
    }
  };

  return (
    <div className="h-full w-full text-center flex flex-col gap-4">
      <div className="flex gap-4 justify-center items-center mt-20">
        <input
          className="border-2 p-2 border-green-300 outline-none text-black"
          type="text"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          placeholder="Enter the first word or Phrase"
        />
        <input
          className="border-2 p-2 border-green-300 outline-none text-black"
          type="text"
          value={second}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
          placeholder="Enter the second word or Phrase"
        />
        <button
          className="p-2 rounded-md bg-green-600 text-white"
          onClick={CheckAnagram}
        >
          Check Anagram
        </button>
      </div>
      {Anagram && (
        <p className="text-black text-opacity-75 font-bold text-lg">
          The word/phrase is a Anagram
        </p>
      )}
      {Anagram === false && (
        <p className="text-black text-opacity-75 font-bold text-lg">
          The word/phrase is not a Anagram
        </p>
      )}
    </div>
  );
};

export default Anagram;
