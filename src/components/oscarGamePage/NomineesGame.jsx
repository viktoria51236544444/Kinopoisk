import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Music from "./assets/game.mp3";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
const NomineesGame = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const navigate = useNavigate();
  const categories = [
    "Лучшие фильмы",
    "Лучший актер",
    "Лучшая актриса",
    "Лучший режиссер",
  ];
  const questions = {
    "Лучшие фильмы": [
      {
        id: 1,
        question: "В каком году вышел фильм 'Титаник'?",
        options: ["1996", "1997", "1998", "1999"],
        answer: "1997",
      },
      {
        id: 2,
        question: "Кто режиссировал фильм 'Крестный отец'?",
        options: [
          "Стивен Спилберг",
          "Фрэнсис Форд Коппола",
          "Мартин Скорсезе",
          "Квентин Тарантино",
        ],
        answer: "Фрэнсис Форд Коппола",
      },
      // Добавьте еще вопросы здесь
    ],
    "Лучший актер": [
      {
        id: 3,
        question: "За какую роль Дэниел Дей-Льюис получил Оскар?",
        options: ["Джон Ф. Кеннеди", "Линкольн", "Ганди", "Форест Гамп"],
        answer: "Линкольн",
      },
      {
        id: 4,
        question:
          "Кто получил Оскар за роль в фильме 'Далласский клуб покупателей'?",
        options: [
          "Джаред Лето",
          "Брэд Питт",
          "Кевин Спейси",
          "Мэттью Макконахи",
        ],
        answer: "Мэттью Макконахи",
      },
      // Добавьте еще вопросы здесь
    ],
    "Лучшая актриса": [
      {
        id: 5,
        question: "Кто получила Оскар за роль в фильме 'Черная Свадьба'?",
        options: [
          "Шарлиз Терон",
          "Холли Берри",
          "Николь Кидман",
          "Хелен Миррен",
        ],
        answer: "Холли Берри",
      },
      {
        id: 6,
        question: "За какую роль Натали Портман получила Оскар?",
        options: [
          "Жизнь Пи",
          "Черный Лебедь",
          "Птичий короб",
          "В поисках Эрика",
        ],
        answer: "Черный Лебедь",
      },
      // Добавьте еще вопросы здесь
    ],
    "Лучший режиссер": [
      {
        id: 7,
        question:
          "Кто получил Оскар за режиссуру фильма 'Властелин колец: Возвращение Короля'?",
        options: [
          "Питер Джексон",
          "Кристофер Нолан",
          "Стэнли Кубрик",
          "Дэвид Финчер",
        ],
        answer: "Питер Джексон",
      },
      {
        id: 8,
        question: "Кто получил Оскар за режиссуру фильма 'Гладиатор'?",
        options: ["Ридли Скотт", "Дэнни Бойл", "Анг Ли", "Стивен Спилберг"],
        answer: "Ридли Скотт",
      },
      // Добавьте еще вопросы здесь
    ],
  };

  const startGame = () => {
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuestionCount(0);
    setIsCorrect(false);
    setIsIncorrect(false);

    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCurrentCategory(randomCategory);
    const randomQuestion =
      questions[randomCategory][
        Math.floor(Math.random() * questions[randomCategory].length)
      ];
    setCurrentQuestion(randomQuestion);
    setSelectedAnswer("");
    setShowResult(false);
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    setIsCorrect(false);
    setIsIncorrect(false);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
      setIsCorrect(true);
      setIsIncorrect(false);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setIsCorrect(false);
      setIsIncorrect(true);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCurrentCategory(randomCategory);
    const randomQuestion =
      questions[randomCategory][
        Math.floor(Math.random() * questions[randomCategory].length)
      ];
    setCurrentQuestion(randomQuestion);
    setSelectedAnswer("");
    setShowResult(false);
    setQuestionCount(questionCount + 1);
    setIsCorrect(false);
    setIsIncorrect(false);
  };

  const handleRestartGame = () => {
    startGame();
  };

  const handleExitGame = () => {
    navigate("/oscarGame");
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="game-container">
      <div className="nominees-game-container">
        <div className="content">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: "yellow", fontSize: "20px" }}>Викторина</h1>
            <IconButton color="primary" onClick={togglePlay}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <audio
              id="audio"
              src={Music}
              autoPlay={isPlaying}
              onEnded={() => setIsPlaying(false)}
            ></audio>
          </div>
          {currentCategory && (
            <div>
              <h2 style={{ color: "grey", fontSize: "15px" }}>
                Категория: {currentCategory}
              </h2>
              <h3 style={{ color: "#ffffff" }}>{currentQuestion.question}</h3>
              <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`option-button ${
                      showResult &&
                      (option === currentQuestion.answer
                        ? "correct"
                        : selectedAnswer === option
                        ? "incorrect"
                        : "")
                    }`}
                    disabled={showResult}
                    style={{
                      backgroundColor:
                        showResult && option === currentQuestion.answer
                          ? "#4CAF50" // Зеленый для правильного ответа
                          : showResult && selectedAnswer === option
                          ? "#D32F2F" // Красный для неправильного ответа
                          : "",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={showResult ? handleNextQuestion : handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="action-button"
              >
                {showResult ? "Следующий вопрос" : "Подтвердить ответ"}
              </button>
            </div>
          )}
          {questionCount === 10 && (
            <div>
              <h2 style={{ color: "#ffffff" }}>Результаты:</h2>
              <p style={{ color: "#ffffff" }}>
                Правильные ответы: {correctAnswers}
              </p>
              <p style={{ color: "#ffffff" }}>
                Неправильные ответы: {incorrectAnswers}
              </p>
              <div className="buttons">
                <button onClick={handleRestartGame} className="action-button">
                  Начать заново
                </button>
                <button onClick={handleExitGame} className="action-button">
                  Выйти
                </button>
              </div>
            </div>
          )}
          {!currentCategory && (
            <button onClick={startGame} className="action-button">
              Начать новую игру
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NomineesGame;
