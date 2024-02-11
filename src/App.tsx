import React, { useState, ReactElement } from "react";
import Counter from "./Challenges/1.Counter/Counter";
import ProgMulti from "./Challenges/2.Programming-Multiverse/ProgMulti";
import Anagram from "./Challenges/3.Anagram-Checker/Anagram";
import Quotes from "./Challenges/4.Quotes-Generator/Quotes";
import ImageGallery from "./Challenges/5.Image-Gallery/ImageGallery";
interface Challenge {
  name: string;
  component: React.FC;
}

function App() {
  const [selectedChallenge, setSelectedChallenge] =
    useState<ReactElement | null>(null);
  const [ChallengeName, setChallangeName] = useState("");

  const challenges: Challenge[] = [
    { name: "Counter", component: Counter },
    { name: "Programming Multiverse", component: ProgMulti },
    { name: "Anagram Checker", component: Anagram },
    { name: "Quotes Generator", component: Quotes },
    { name: "Image Gallery", component: ImageGallery },
  ];
  const handleselected = (index: number) => {
    setSelectedChallenge(React.createElement(challenges[index].component));
    setChallangeName(challenges[index].name);
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[50px] flex text-xl font-bold shadow-md bg-slate-200">
        <button
          className="text-black font-bold text-2xl w-[10%]"
          onClick={() => {
            window.location.reload();
          }}
        >
          &#8592;
        </button>
        <div className="flex justify-center items-center w-[90%]">
          {ChallengeName || "FrontEnd Mini Challenges"}
        </div>
      </div>
      {!selectedChallenge && (
        <>
          <div className="grid grid-cols-2 gap-10 p-4 mt-4">
            {challenges.map((challenge, index) => (
              <button
                className="border-2 h-[100px] w-[40vw] text-2xl font-bold text-green-600 bg-white shadow-sm p-2"
                key={index}
                onClick={() => handleselected(index)}
              >
                {challenge.name}
              </button>
            ))}
          </div>
        </>
      )}
      <div>{selectedChallenge}</div>
    </div>
  );
}

export default App;
