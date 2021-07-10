import { useHistory } from "react-router-dom";
import "../App.css";
import surveyImage from "../assets/images/survey.png";
import { useState } from "react";
import { saveUser } from "../redux/general/action";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Landing = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { push } = useHistory();

  const handleGetStarted = () => {
    if (name) {
      dispatch(saveUser(name));
      push("/quiz");
      return;
    }

    toast.error("Name is Required");
  };

  return (
    <main>
      <section className="welcome-screen">
        <div className="left">
          <img src={surveyImage} alt="survey" />
        </div>
        <div className="right">
          <h3>welcome to Know More</h3>
          <p>a survey quiz app to that test your knowledge </p>
          <input
            type="text"
            placeholder="Enter Name To Continue"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <button className="button" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
      </section>
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
    </main>
  );
};

export default Landing;
