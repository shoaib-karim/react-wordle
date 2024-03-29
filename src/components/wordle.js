import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return (
    <div>
      <div>current Guess - {solution}</div>
      <div>current Guess - {currentGuess}</div>
    </div>
  );
}
