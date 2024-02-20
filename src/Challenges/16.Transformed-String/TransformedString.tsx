import { useState } from "react";

const TransformedString = () => {
  const [text, setText] = useState<string>("");
  const [transformedString, setTransformedString] = useState<string>("");
//   console.log(text);

  const toCamelCase = (str: string): string => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");
  };

  const toPascalCase = (str: string): string => {
    return str
      .replace(
        /\w+/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .replace(/\s+/g, "");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full mt-10">
      <textarea
        className="outline-none border-2 p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols={80}
        rows={5}
      ></textarea>
      <div className="grid grid-cols-3 gap-4 w-[80%]">
        <button
          onClick={() => setTransformedString(text.toLowerCase())}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Lower Case
        </button>
        <button
          onClick={() => setTransformedString(text.toUpperCase())}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Upper Case
        </button>
        <button
          onClick={() => setTransformedString(toCamelCase(text))}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Camel Case
        </button>
        <button
          onClick={() => setTransformedString(toPascalCase(text))}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Pascal Case
        </button>
        <button
          onClick={() => setTransformedString(text.replace(/\s+/g, "_"))}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Snake Case
        </button>
        <button
          onClick={() => setTransformedString(text.replace(/\s+/g, "-"))}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Kebab Case
        </button>
        <button
          onClick={() => setTransformedString(text.trim())}
          className="p-1 border-[1px] border-black bg-slate-200"
        >
          Trim
        </button>
      </div>
      <div className="text-center">
        <p className="font-bold text-lg">Transformed String:</p>
        <p>{transformedString}</p>
      </div>
    </div>
  );
};
export default TransformedString;
