import { useState } from "react";

const Hero = () => {
  // const [showFinalResult, showFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      text: "What is the capital of Pakistan",
      options: [
        { id: 0, text: "islamabad ", isCorrect: true },
        { id: 1, text: "delhi",  },
        { id: 2, text: "anagol",  },
        { id: 3, text: "baku",  },
      ],
    },
    {
      text: "World war 1 happened",
      options: [
        { id: 0, text: "1915", },
        { id: 1, text: "1919", isCorrect: true },
        { id: 2, text: "1923",  },
        { id: 3, text: "1857",  },
      ],
    },
    {
      text: "Who was the president of pakistan",
      options: [
        { id: 0, text: "arif alvi", isCorrect: true },
        { id: 1, text: "shahbaaz shreef",  },
        { id: 2, text: "bhutto",  },
        { id: 3, text: "maryam nawaz",  },
      ],
    },
    {
      text: "What is the largest state in the pakistan",
      options: [
        { id: 0, text: "balochistan", isCorrect: true },
        { id: 1, text: "sindth",  },
        { id: 2, text: "punjab",  },
        { id: 3, text: "kpk",  },
      ],
    },
    {
      text: "Which of the following countries DO NOT border pakistan",
      options: [
        { id: 0, text: "india",  },
        { id: 1, text: "oman", isCorrect: true },
        { id: 2, text: "iran", },
        { id: 3, text: "qatar",  },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1>Quiz</h1>
              <h2>Current Score {score}</h2>
              {showResults ? (
                <div className="final-result mx-auto">
                  <h2>Final Result</h2>
                  <h3>
                    {" "}
                    {score} out of {questions.length} correct - (
                    {(score / questions.length) * 100}%)
                  </h3>
                  <button className="btn" onClick={() => restartGame()}>
                    Restart Quize
                  </button>
                </div>
              ) : (
                <div className="question-card shadow">
                  <h3>
                    Question {currentQuestion + 1} out of{" "}
                    {questions.length}
                  </h3>
                  <h4 className="question-text">
                    {questions[currentQuestion].text}
                  </h4>
                  <ul className="list-unstyled">
                    {questions[currentQuestion].options.map((option) => {
                      return (
                        <li
                          key={option.id}
                          onClick={() => optionClicked(option.isCorrect)}
                        >
                          {option.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
