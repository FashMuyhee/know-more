/**
 *
 * Answer Options Components
 */
import "./index.css";
import { useState, useEffect } from "react";

const AnswerOption = ({ data = [], isSelected = false, isScored = false }) => {
  const alphabet = ["a", "b", "c", "d"];
  const [answerOption, setAnswerOption] = useState("");

  const handleSelect = (selectedOption, isCorrect) => (e) => {
    setAnswerOption(selectedOption);
    isSelected(true);
    if (isCorrect) {
      isScored(true);
      return;
    }
  };

  return (
    <>
      {data.map((item, key) => (
        <div
          className={`answer-option ${
            answerOption === item?.answer ? "selected" : ""
          }`}
          onClick={handleSelect(item?.answer, item.isCorrect)}
          key={key}
        >
          <span className="option-letter">{alphabet[key]}</span>
          <p className="option-text">{item?.answer}</p>
        </div>
      ))}
    </>
  );
};

export default AnswerOption;
