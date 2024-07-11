const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};
const Content = ({ parts }) => {
  const sum = parts.reduce((acum, part) => acum + part.exercises, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <h3>the total of {sum} exercises</h3>
    </div>
  );
};
export default Content;
