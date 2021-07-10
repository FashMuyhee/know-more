/**
 * Report Modal Component
 */
import "./index.css";
import { useSelector } from "react-redux";

export const Modal = ({ visible, onClose }) => {
  const { user } = useSelector((state) => state.general);
  const { questions, score } = useSelector((state) => state.quiz);

  return (
    <div className={!visible ? "closed" : ""}>
      <div className="modal-overlay" id="modal-overlay"></div>
      <div className="modal" id="modal">
        <div className="modal-guts">
          <h1>{`Congratulations ${user} 🎉🎉`}</h1>
          <p>You have completed the quiz.</p>
          <p>{`${score}/${questions.length}`}</p>
          <button className="button" onClick={onClose}>
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};
