"use client";
import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";
import WordDisplay from "../components/WordDisplay";
import InputField from "../components/Input";
import ResetButton from "../components/ResetButton";


const styles = {


}





const TypingGame: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [missCount, setMissCount] = useState<number>(0);
  const [time, setTime] = useState<number>(30);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // 初期ロード時に単語を生成
  useEffect(() => {
    generateNewWord();
  }, []);

  // タイマーの管理
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (time > 0 && !gameOver && missCount < 5) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if ((time === 0 || missCount >= 5) && !gameOver) {
      setGameOver(true);
      alert("Game Over");
    }

    return () => clearTimeout(timer);
  }, [time, gameOver, missCount]);

  // ランダム単語を外部APIから取得
  const fetchRandomWord = async (): Promise<string> => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const data = await response.json();
      return data[0]; // 単語を返す
    } catch (error) {
      console.error("Error fetching word:", error);
      return "error"; // エラー時のデフォルト単語
    }
  };

  // 新しい単語を生成
  const generateNewWord = async () => {
    const newWord = await fetchRandomWord();
    setWord(newWord);
    setInput("");
  };

  // リセットボタンの処理
  const reset = () => {
    setInput("");
    setScore(0);
    setMissCount(0);
    setTime(30);
    setGameOver(false);
    generateNewWord();
  };

  // 入力フィールドの変更イベント処理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInput(userInput);

    if (!gameOver && missCount < 5) {
      if (userInput === word) {
        setScore(score + 10);
        setTime(time + 2);
        generateNewWord();
      } else if (userInput.length >= word.length) {
        setScore(Math.max(score - 1, 0));
        setMissCount(missCount + 1);

        if (missCount + 1 >= 5) {
          setGameOver(true);
          alert("Game Over");
        }

        setTime(Math.max(time - 3, 0));
      }
    }
  };

  return (
    <div>
      <h1>Typing Game</h1>
      <WordDisplay word={word} />
      <InputField input={input} onChange={handleInputChange} />
      <ResetButton onClick={reset} />
      <ScoreBoard score={score} missCount={missCount} />
      <Timer time={time} />
    </div>
  );
};

export default TypingGame;
