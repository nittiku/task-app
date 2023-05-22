import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import cp_mapping from "./cp_mapping.json";
import cp_questions from "./cp_questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleButtonClicked = (buttonType) => {
    const currentTask = cp_mapping.tasks.find(
      (task) => task.QuestionID === currentQuestion
    );

    if (currentTask) {
      const nextQuestion = getNextQuestionID(buttonType);

      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      }
    }
  };

  const getNextQuestionID = (currentTask, buttonType) => {
    if (currentTask.TemplateType === 2 || currentTask.TemplateType === 3) {
      const actionDepth = getActionDepth(currentTask, buttonType);
      return currentTask[`ActionDepth${actionDepth}`];
    }

    return currentTask.NextQuestionID;
  };

  const getActionDepth = (buttonType) => {
    switch (buttonType) {
      case "yes":
        return 1;
      case "no":
        return 2;
      case "approve":
        return 1;
      case "pending":
        return 2;
      case "decline":
        return 3;
      case "notfound":
        return 4;
      default:
        return 1;
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
