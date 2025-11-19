import { useState } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Header = ({ name, options }) => (
  <>
    <h1>{name}</h1>
    {options.map(({ name, handleClick }) => (
      <Button key={name} onClick={handleClick} name={name} />
    ))}
  </>
);

const Statistic = ({ name, total }) => (
  <tr>
    <td>{name}</td>
    <td>{total}</td>
  </tr>
);

const Statistics = ({ options }) => (
  <>
    <h2>statistics</h2>
    <table>
      <tbody>
        {options.map(({ name, total }) => (
          <Statistic key={name} name={name} total={total} />
        ))}
      </tbody>
    </table>
  </>
);

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (type) => () => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const feedbackOptions = [
    {
      name: "good",
      total: feedbackCounts.good,
      handleClick: handleFeedbackClick("good"),
    },
    {
      name: "neutral",
      total: feedbackCounts.neutral,
      handleClick: handleFeedbackClick("neutral"),
    },
    {
      name: "bad",
      total: feedbackCounts.bad,
      handleClick: handleFeedbackClick("bad"),
    },
  ];

  return (
    <div>
      <Header name="give feedback" options={feedbackOptions} />
      <Statistics options={feedbackOptions} />
    </div>
  );
};

export default App;
