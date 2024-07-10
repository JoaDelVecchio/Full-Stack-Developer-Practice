import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statisticcs = (props) => {
  if (props.total == 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <br></br>
        Good:{props.counters.good}
        <br></br>
        Neutral:{props.counters.neutral}
        <br></br>
        Bad:{props.counters.bad}
        <br></br>
        All: {props.total}
        <br></br>
        Average: {props.average}
        <br></br>
        Positive: {props.positive}%<br></br>
      </div>
    );
  }
};

const App = () => {
  let [counters, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let total = counters.good + counters.neutral + counters.bad;
  let average = (counters.good - counters.bad) / 10;
  let positive = (counters.good / total) * 100;

  const feedback = (feedback) => {
    setCounter((counters) => ({
      ...counters,
      [feedback]: counters[feedback] + 1,
    }));
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => feedback("good")} text="good" />
      <Button onClick={() => feedback("neutral")} text="neutral" />
      <Button onClick={() => feedback("bad")} text="bad" />
      <h2>statisticcs</h2>
      <Statisticcs
        counters={counters}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
