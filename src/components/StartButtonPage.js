import { useState } from "react";
import Startseite from "./StartPage.js";
import "../Style.css";

const StartButtonPage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="containerStartButtonPage">
      {clicked ? (
        <Startseite />
      ) : (
        <div>
          <p id="UseCaseDescribtion">
            <br></br>
            Bitte testen Sie nun die zweite App-Version.
            <br></br>
            <br></br>
          </p>
          <button
            class="buttonStartButton"
            disabled={clicked}
            onClick={() => setClicked(true)}
          >
            {" "}
            Start Nav2Gö{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default StartButtonPage;
