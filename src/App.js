import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://wordle-data.herokuapp.com/solutions")
      .then((res) => res.json())
      .then((json) => {
        //Random Integer between 0 and 14
        const radomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(radomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
