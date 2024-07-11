const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};
const Sum = ({ parts }) => (
  <h3>
    total of {parts.reduce((acum, part) => acum + part.exercises, 0)} exercises
  </h3>
);

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Sum parts={parts} />
    </div>
  );
};
export default Content;
