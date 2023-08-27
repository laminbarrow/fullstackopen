const Course = ({ course }) => {
  const parts = course.parts;

  // destructuring parts to extract exercises
  const total = parts.reduce((acc, { exercises }) => {
    return acc + exercises;
  }, 0);

  return (
    <>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Total = ({ sum }) => {
  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  );
};
export default Course;
