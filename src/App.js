import React from "react";

function App() {
  return (
    <div className="App">
      <section>
        <h2>Please leave feedback</h2>
        <div className="buttons-wrapper">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
      </section>

      <section>
        <h2>Statistics</h2>
        <h3>Good: {3}</h3>
        <h3>Neutral: {3}</h3>
        <h3>Bad: {3}</h3>
        <h3>Total: {3}</h3>
        <h3>Positive feedback: {3}</h3>
      </section>
    </div>
  );
}

export default App;
