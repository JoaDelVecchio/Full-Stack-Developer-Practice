import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ elem }) => <div>{elem}</div>;

const App = () => {
  return (
    <div>
      <Display elem={<h2>give feedback</h2>} />
      <Button onClick={() => console.log("hi")} text="good" />
      <Button onClick={() => console.log("hi")} text="neutral" />
      <Button onClick={() => console.log("hi")} text="bad" />
      <Display elem={<h2>statisticcs</h2>} />
      <Display elem="good 6" />
      <Display elem="neutral 2" />
      <Display elem="bad 1" />
    </div>
  );
};

export default App;
