import "./styles/result.css";

function Result({ correct, questionsData }) {
  return (
    <div className="resultContainer">
      <div className="result">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5520/5520860.png"
          alt="end"
          className="resultImg"
        />
        <h2 className="resultAnswered">
          You guessed {correct} answers out of {questionsData.length}{" "}
        </h2>
        <a href="/">
          <button style={{ cursor: "pointer" }} className="tryAgainBtn">
            Try Again
          </button>
        </a>
      </div>
    </div>
  );
}

export default Result;
