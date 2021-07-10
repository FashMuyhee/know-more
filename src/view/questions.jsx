/**
 *Questions Component
 */

import { useState, useEffect } from "react";
import "../App.css";
import { AnswerOption, Loader, Modal } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../redux/quiz/action";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { updateScore } from "../redux/quiz/action";

const Questions = () => {
  const [selected, setSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [index, setIndex] = useState(0);
  const { questions, loading, score } = useSelector((state) => state.quiz);
  const { user } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const { push } = useHistory();

  /**
   *
   *handle next question
   */
  const handleNext = () => {
    if (!selected) {
      toast.error("Select an Option To Continue");
      return;
    }
    const currentScore = isCorrect ? score + 1 : score;
    dispatch(updateScore(currentScore));
    setIndex((index) => index + 1);

    setSelected(false);
  };

  /**
   *
   *handle previous question
   */
  const handlePrevious = () => {
    setIndex((index) => index - 1);
  };

  /**
   *
   *handle show result
   */
  const handleSubmit = () => {
    setIsReportModal(true);
  };

  //   load all questions
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <main className="question-screen">
      <nav>
        <h3>know more</h3>
        <h3 style={{ color: "#f9e601" }}>{user}</h3>
      </nav>
      {loading ? (
        <section className="question">
          <Loader />
          <p>Fetching Questions</p>
          <p>Keep calm🙂🙂🙂</p>
        </section>
      ) : (
        <section className="question">
          <div className="question-box">
            <h3>{`Question ${index + 1}`}</h3>
            <p>{questions[index]?.question}</p>
          </div>
          <div className="optionList">
            <AnswerOption
              isSelected={(state) => setSelected(state)}
              data={questions[index]?.answerOptions}
              isScored={(state) => setIsCorrect(state)}
            />
          </div>
          <div className="buttonList">
            {index === 0 ? null : (
              <button className="button previous" onClick={handlePrevious}>
                previous
              </button>
            )}
            {index + 1 === questions.length ? (
              <button className="button next" onClick={handleSubmit}>
                submit
              </button>
            ) : (
              <button
                className={`button ${selected ? "next" : ""}`}
                onClick={handleNext}
              >
                next
              </button>
            )}
          </div>
        </section>
      )}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#04276d",
            color: "#fff",
          },
        }}
      />
      <Modal
        visible={isReportModal}
        onClose={() => {
          setIsReportModal(false);
          push("/");
        }}
      />
    </main>
  );
};

export default Questions;
