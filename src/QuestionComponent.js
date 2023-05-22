import React from "react";

const QuestionComponent = ({ question, onButtonClicked }) => {
  return (
    <div>
      <h3>{question.Question}</h3>
      {question.TemplateType === 1 && (
        <button onClick={() => onButtonClicked("ok")}>Ok</button>
      )}
      {question.TemplateType === 2 && (
        <div>
          <button onClick={() => onButtonClicked("yes")}>Yes</button>
          <button onClick={() => onButtonClicked("no")}>No</button>
        </div>
      )}
      {question.TemplateType === 3 && (
        <div>
          <button onClick={() => onButtonClicked("approve")}>Approve</button>
          <button onClick={() => onButtonClicked("pending")}>Pending</button>
          <button onClick={() => onButtonClicked("decline")}>Decline</button>
          <button onClick={() => onButtonClicked("notfound")}>Not Found</button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
