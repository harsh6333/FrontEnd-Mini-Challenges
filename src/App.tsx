import React, { useState, ReactElement } from "react";
import Counter from "./Challenges/1.Counter/Counter";
import ProgMulti from "./Challenges/2.Programming-Multiverse/ProgMulti";
import Anagram from "./Challenges/3.Anagram-Checker/Anagram";
import Quotes from "./Challenges/4.Quotes-Generator/Quotes";
import ImageGallery from "./Challenges/5.Image-Gallery/ImageGallery";
import Accordion from "./Challenges/6.Accordion/Accordion";
import Backgroundchanger from "./Challenges/7.Background-Changer/Backgroundchanger";
import QRCodeGenerator from "./Challenges/8.QRCodeGenerator/QRCodeGenerator";
import YourSport from "./Challenges/9.Your-Sport/YourSport";
import TableColorizer from "./Challenges/10.Table-Colorizer/TableColorizer";
import Pagination from "./Challenges/11.Pagination/Pagination";
import Stack from "./Challenges/12.Stack/Stack";
import WordCount from "./Challenges/13.Word-Count/WordCount";
import TempConv from "./Challenges/14.Temperature-Converter/TempConv";
import StarRating from "./Challenges/15.Star-Rating/StarRating";
import TransformedString from "./Challenges/16.String-Transformer/StringTransformer";
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
    { name: "Accordion", component: Accordion },
    { name: "Background Changer", component: Backgroundchanger },
    { name: "QRCode Generator", component: QRCodeGenerator },
    { name: "Your Sport", component: YourSport },
    { name: "Table Colorizer", component: TableColorizer },
    { name: "Pagination", component: Pagination },
    { name: "Stack", component: Stack },
    { name: "Word Count", component: WordCount },
    { name: "Temperature Converter", component: TempConv },
    { name: "Star Rating", component: StarRating },
    {name:"String Transformers", component:TransformedString}
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
