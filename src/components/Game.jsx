import "./styles/game.css";

function Game({ question, onClickVariant, step, questionsData }) {
  const progress = Math.round((step / questionsData.length) * 100);

  return (
    <div className="gameContainer">
      <div className="game">
        <div className="progressContainer">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <h1 className="question"> {question.title} </h1>
        <ul className="answersList">
          {question.variants.map((text, index) => (
            <li
              onClick={() => onClickVariant(index)}
              key={text}
              className="answerItem"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
