import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleButtonClicked = (buttonType) => {
    const currentTask = cp_mapping.tasks.find(
      (task) => task.QuestionID === currentQuestion
    );

    if (currentTask) {
      let nextQuestionID;

      switch (buttonType) {
        case "ok":
          nextQuestionID = currentTask.NextQuestionID;
          break;
        case "yes":
          nextQuestionID = currentTask.NextQuestionID;
          break;
        case "no":
          nextQuestionID = currentTask.NextQuestionID + 1;
          break;
        case "multi":
          nextQuestionID = currentTask.NextQuestionID + 1;
          break;
        default:
          break;
      }

      if (nextQuestionID) {
        const nextQuestion = cp_questions.tasks.find(
          (question) => question.ID === nextQuestionID
        );
        if (nextQuestion) {
          setCurrentQuestion(nextQuestion.ID);
        }
      }
    }
  };

  const currentQuestionObj = cp_questions.tasks.find(
    (task) => task.ID === currentQuestion
  );

  return (
    <div>
      {currentQuestionObj && (
        <QuestionComponent
          question={currentQuestionObj}
          onButtonClicked={handleButtonClicked}
        />
      )}
    </div>
  );
};

export default App;
