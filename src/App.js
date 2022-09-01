import React, { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  const questionsData = [
    {
      title: "React is ... ?",
      variants: ["Library", "Framework", "App"],
      correct: 0,
    },
    {
      title: "Component is ... ?",
      variants: ["App", "Part of app", "Some Library"],
      correct: 1,
    },
    {
      title: "What is JSX?",
      variants: ["Syntax extension of JavaScript.", "Library for React", "Language"],
      correct: 0,
    },
    {
      title: "What is the virtual DOM?",
      variants: ["The DOM represents an React/Redux document with a logical tree structure.", "The DOM represents an HTML document with a logical tree structure.", "The DOM represents an CSS tree structure."],
      correct: 0,
    },
    {
      title: "Why is there a need for using keys in Lists??",
      variants: ['For easy use of cycles', 'New rules of formality 16 version of React','A key is a unique identifier'],
      correct: 2,
    },
  ];
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questionsData[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <>
      {step !== questionsData.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          questionsData={questionsData}
        />
      ) : (
        <Result correct={correct} questionsData={questionsData} />
      )}
    </>
  );
}

export default App;
