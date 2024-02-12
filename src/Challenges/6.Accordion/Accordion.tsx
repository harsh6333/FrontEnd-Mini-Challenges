import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const Accordion = () => {
  const [Allowed, setAllowed] = useState<boolean>(true);
  const [openedQuestions, setOpenQuestions] = useState<
    { id: number; state: boolean }[]
  >([]);

  const toggleQuestion = (questionId: number) => {
    if (!Allowed) {
      setOpenQuestions([{ id: questionId, state: true }]);
    } else {
      const existingQuestion = openedQuestions.find(
        (question) => question.id === questionId
      );

      if (existingQuestion) {
        setOpenQuestions(
          openedQuestions.map((question) =>
            question.id === questionId
              ? { ...question, state: !question.state }
              : { ...question }
          )
        );
      } else {
        setOpenQuestions([...openedQuestions, { id: questionId, state: true }]);
      }
    }
  };

  const FuncAllowed = () => {
    setAllowed((prev) => !prev);
    setOpenQuestions([]);
  };

  const ClosedQuestion = (questionId: number) => {
    const existingQuestion = openedQuestions.find(
      (question) => question.id === questionId
    );

    if (existingQuestion) {
      setOpenQuestions(
        openedQuestions.map((question) =>
          question.id === questionId
            ? { ...question, state: !question.state }
            : { ...question }
        )
      );
    }
  };

  const questions = [
    {
      id: 1,
      question: "Do I have to allow the use of cookies?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      state: true,
    },
    {
      id: 2,
      question: "How do I change my My Page password?",
      answer:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      question: "What is BankID?",
      answer:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      question: "Whose birth number can I use?",
      answer:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      id: 5,
      question: "When do I recieve a password ordered by letter?",
      answer:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 mt-10">
      <div className="flex gap-4 font-bold mb-4">
        <p>Is multiple Accordion allowed?</p>
        <input
          type="checkbox"
          checked={Allowed}
          onChange={FuncAllowed}
          name=""
          id=""
        />
      </div>
      {questions.map((question) => (
        <div
          className="border-2 w-[90%]  p-4 flex justify-between items-center"
          key={question.id}
        >
          <div className="flex flex-col w-[80%] gap-2 p-4">
            <p className="text-lg font-bold">{question.question}</p>
            {openedQuestions.find(
              (q) => q.id === question.id && q.state == true
            ) ? (
              <p>{question.answer}</p>
            ) : (
              <></>
            )}
          </div>
          {openedQuestions.find((q) => q.id === question.id && q.state) ? (
            <AiOutlineMinusCircle
              onClick={() => ClosedQuestion(question.id)}
              className="h-[30px] w-[30px]"
            />
          ) : (
            <AiOutlinePlusCircle
              onClick={() => toggleQuestion(question.id)}
              className="h-[30px] w-[30px]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
