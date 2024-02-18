import { useState } from "react";

const WordCount = () => {
  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [paraCount, setParaCount] = useState<number>(0);
  const counts = () => {
    setWordCount(text.split(" ").filter((word)=>word!="").length);
    setCharCount(text.length);
    setParaCount(text.split("\n").length);
  };
  const clear = () => {
    setWordCount(0);
    setCharCount(0);
    setParaCount(0);
    setText("");
  };

  return (
    <div className="flex flex-col w-full mt-10 justify-center items-center">
      <textarea
        className=" border-2 border-black p-2"
        name=""
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id=""
        cols={70}
        rows={10}
      ></textarea>
      <div className="flex gap-10 mt-4 justify-between items-center">
        <p className="font-semibold text-lg">Words: {wordCount}</p>
        <p className="font-semibold text-lg">Chars: {charCount}</p>
        <p className="font-semibold text-lg">Paras: {paraCount}</p>
        <button
          className="p-1 w-[70px] rounded-md text-white bg-black"
          onClick={() => counts()}
        >
          Count
        </button>
        <button
          className="p-1 w-[70px] rounded-md text-white bg-black"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default WordCount;
