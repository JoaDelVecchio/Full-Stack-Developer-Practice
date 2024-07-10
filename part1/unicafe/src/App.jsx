import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statisticcs = ({ counters, average, total, positive }) => {
  if (total == 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={counters.good} />
          <StatisticsLine text="neutral" value={counters.neutral} />
          <StatisticsLine text="bad" value={counters.bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={`${positive}%`} />
        </tbody>
      </table>
    );
  }
};

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

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
