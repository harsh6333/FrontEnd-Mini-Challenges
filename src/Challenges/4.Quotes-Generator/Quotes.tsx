import { useState } from "react";
import { Quoteslist } from "../../quotes";
const Quotes = () => {
  const [choosencategory, setChoosenCategory] = useState<string | null>(null);
  const getRandomQuote = (quotes: any) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const choosenCategortType = Quoteslist.filter(
    (category) => category.type === choosencategory
  ).map((category) => getRandomQuote(category.quotes));
  const handleCategory = (name: string) => {
    if (choosencategory == name) {
      setChoosenCategory("");
    } else {
      setChoosenCategory(name);
    }
  };
  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleCategory("Motivational")}
          className="border-2 p-2 rounded-md bg-[#FFA500]"
        >
          Motivational
        </button>
        <button
          onClick={() => handleCategory("Sports")}
          className="border-2 p-2 rounded-md bg-[#2a2aa1]"
        >
          Sports
        </button>
        <button
          onClick={() => handleCategory("Wisdom")}
          className="border-2 p-2 rounded-md bg-[#800080] "
        >
          Wisdom
        </button>
        <button
          onClick={() => handleCategory("Movies")}
          className="border-2 p-2 rounded-md bg-[#ef4646]"
        >
          Movies
        </button>
        <button
          onClick={() => handleCategory("Love")}
          className="border-2 p-2 rounded-md bg-[#FF0000]"
        >
          Love
        </button>
        <button
          onClick={() => handleCategory("Friendship")}
          className="border-2 p-2 rounded-md bg-[#FFD700]"
        >
          Friendship
        </button>
      </div>
      {choosenCategortType.map((quote, index) => (
        <div key={index} className="text-center mt-10 p-12">
          <p className="text-lg font-semibold font-mono">{quote.quote}</p>
          <p className="text-base font-semibold">
            By: {quote.By || quote.Movie}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Quotes;
