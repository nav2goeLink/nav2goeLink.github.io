import "./Style.css";

const LinkPage = () => {
  const matchLink = () => {
    let linknumber = Math.floor(Math.random() * 4);
    if (linknumber === 0) {
      return "https://morza95.github.io";
    }
    if (linknumber === 1) {
      return "https://kaiuby.github.io";
    }
    if (linknumber === 2) {
      return "https://nav2goekatha2.github.io";
    }
    if (linknumber === 3) {
      return "https://nav2goe4.github.io";
    }
  };

  return (
    <div id="containerStartButtonPage">
      <div>
        <p id="UseCaseDescribtion">
          <br></br>
          Sehr geehrte(r) Teilnehmer(in),
          <br></br>
          <br></br> im Rahmen unserer Forschungsarbeit an der
          Georg-August-Universität Göttingen beschäftigen wir uns mit dem Thema
          "Designing apps: A comparative evaluation of the importance of
          functionality, performance and visual appeal" und bitten Sie, zwei
          Web-Apps zu testen und an einer Befragung teilzunehmen. Die Teilnahme
          dauert insgesamt ca. 5-10 Minuten.
          <br></br>
          <br></br> Bitte lesen Sie die Beschreibung in den Apps sorgfältig
          durch.
          <br></br>
          <br></br> Vielen Dank für die Teilnahme!
          <br></br>
          <br></br> Bei Fragen und Anmerkungen zu dieser Studie wenden Sie sich
          gerne an:
          <br></br>
          <br></br>franz.buschendorf@stud.uni-goettingen.de
          <br></br>katharina.girndt@stud.uni-goettingen.de
          <br></br>kai.hoering@stud.uni-goettingen.de
          <br></br>
          <br></br>
          {/* {(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}

window.location.href="http://url.com";

onClick(){
    window.location.href="http://url.com";
} */}
        </p>
        <a class="buttonStartButton" href={matchLink()}>
          Start Nav2Gö
        </a>
      </div>
    </div>
  );
};

export default LinkPage;
