import React from "react";
import GeneratedWords from "./components/GeneratedWords";
import Reset from "./components/Reset";
import Report from "./components/Report";
import TypingUser from "./components/TypingUser";
import useEngine from "./hooks/useEngine";
import {calcAccuracy} from "./utils/helpers";
import KeyboardPress from "./components/KeyboardPress";
import Header from "./components/Header";
import MainWordsContainer from "./components/MainWordsContainer";
import Timer from "./components/Timer";

const App = () => {
  const {words,typed,timeLeft,errors,state,restart,totalTyped} =
    useEngine();

  return (
    <>
      <Header />
      <Timer timeLeft={timeLeft} />
      <MainWordsContainer>
        <GeneratedWords key={words} words={words} />
        {/* User typed characters will be overlayed over the generated words */}
        <TypingUser
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </MainWordsContainer>
      <Reset
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Report
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calcAccuracy(errors,totalTyped)}
        total={totalTyped}
      />
      <KeyboardPress key={words} words={words} />
    </>
  );
};




export default App;
