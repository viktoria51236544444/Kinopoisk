import React, { useState } from "react";

const NomineesGame = () => {
  // List of nominees for each category
  const bestMoviesList = [
    {
      nameRus: "Анатомия падения",
      nameEng: "Anatomy of a Fall",
    },
    {
      nameRus: "Убийцы цветочной луны",
      nameEng: "Killers of the Flower Moon",
    },
    // Add more nominees here
  ];

  const bestActorNomineesList = [
    {
      name: "Пол Джаматти",
      movie: "Оставленные",
    },
    {
      name: "Джеффри Райт",
      movie: "Американское чтиво",
    },
    // Add more nominees here
  ];

  // Define other categories and their nominees similarly

  // List of categories
  const categories = [
    "Best Movies",
    "Best Actor",
    // Add more categories here
  ];

  // Object to store nominees for each category
  const nominees = {
    "Best Movies": bestMoviesList,
    "Best Actor": bestActorNomineesList,
    // Add more categories here
  };

  // State to store current category and answer
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  // Function to start a new game
  const startGame = () => {
    // Randomly select a category
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCurrentCategory(randomCategory);

    // Get nominees for the selected category
    const nomineesList = nominees[randomCategory];

    // Randomly select a nominee from the nominees list
    const randomNominee =
      nomineesList[Math.floor(Math.random() * nomineesList.length)];

    // Set the current answer to the name of the selected nominee
    setCurrentAnswer(randomNominee.nameRus);
  };

  // Function to handle user's guess
  const handleGuess = (event) => {
    const { value } = event.target;

    // Check if the guess is correct
    if (value === currentAnswer) {
      alert("Correct! 🎉");
    } else {
      alert("Incorrect! 😔");
    }

    // Start a new game
    startGame();
  };

  return (
    <div>
      <h1>Nominees Game</h1>
      <p>Category: {currentCategory}</p>
      <button onClick={startGame}>Start New Game</button>
      <p>Guess the winner:</p>
      <input type="text" onChange={handleGuess} />
    </div>
  );
};

export default NomineesGame;
