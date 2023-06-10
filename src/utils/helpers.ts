// accept only letters and whitespaces
export const isCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space" ||
    code === ";" ||
    code.length === 1
  );
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
};

export const calcAccuracy = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }

  return 0;
};

export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

export const debug = (str: string) => {
  if (process.env.NODE_ENV === "development") {
    console.debug(str);
  }
};
