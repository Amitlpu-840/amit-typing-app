import { useCallback, useState } from "react";

const generateWords = (count: number) => {
  const validLetters = "asdfjkl;";
  const words: string[] = [];

  for (let i = 0; i < count+1; i++) {
    let word = "";
    const wordLength = Math.floor(Math.random() * 10) + 1; // Random word length between 1 and 10

    for (let j = 0; j < wordLength; j++) {
      const randomIndex = Math.floor(Math.random() * validLetters.length);
      word += validLetters[randomIndex];
    }

    words.push(word);
  }

  return words.join(" ");
};

const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;
