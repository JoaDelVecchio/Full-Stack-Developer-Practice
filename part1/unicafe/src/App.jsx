import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Display = ({ elem }) => <div>{elem}</div>;

const App = () => {
  let [counters, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  console.log(counters);
  const feedback = (feedback) => {
    setCounter((counters) => ({
      ...counters,
      [feedback]: counters[feedback] + 1,
    }));
  };

  return (
    <div>
      <Display elem={<h2>give feedback</h2>} />
      <Button onClick={() => feedback("good")} text="good" />
      <Button onClick={() => feedback("neutral")} text="neutral" />
      <Button onClick={() => feedback("bad")} text="bad" />
      <Display elem={<h2>statisticcs</h2>} />
      <Display elem={`good: ${counters.good}`} />
      <Display elem={`neutral: ${counters.neutral}`} />
      <Display elem={`bad: ${counters.bad}`} />
    </div>
  );
};

export default App;
