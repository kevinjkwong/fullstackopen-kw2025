import { useState, useMemo } from "react";

const useFeedbackLogic = () => {
  const [counts, setCounts] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbackClick = (type) => () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const derivedStats = useMemo(() => {
    const { good, neutral, bad } = counts;
    const total = good + neutral + bad;

    if (total === 0) {
      return {
        total,
        average: 0,
        positivePercentage: 0,
      };
    }

    const average = (good * 1 + bad * -1) / total;
    const positivePercentage = (good / total) * 100;

    return {
      total,
      average: average.toFixed(2),
      positivePercentage: positivePercentage.toFixed(2),
    };
  }, [counts]);

  const buttonOptions = [
    { name: "good", handleClick: handleFeedbackClick("good") },
    { name: "neutral", handleClick: handleFeedbackClick("neutral") },
    { name: "bad", handleClick: handleFeedbackClick("bad") },
  ];

  return { counts, derivedStats, buttonOptions };
};

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Buttons = ({ options }) => (
  <>
    {options.map(({ name, handleClick }) => (
      <Button key={name} onClick={handleClick} name={name} />
    ))}
  </>
);

const Header = ({ name }) => <h1>{name}</h1>;

const Statistic = ({ name, count, unit = "" }) => (
  <tr>
    <td>{name}</td>
    <td>
      {count} {unit}
    </td>
  </tr>
);

const Statistics = ({ counts, derivedStats }) => {
  const { total, average, positivePercentage } = derivedStats;

  if (total === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic name="good" count={counts.good} />
          <Statistic name="neutral" count={counts.neutral} />
          <Statistic name="bad" count={counts.bad} />
          <Statistic name="all" count={total} />
          <Statistic name="average" count={average} />
          <Statistic name="positive" count={positivePercentage} unit="%" />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const { counts, derivedStats, buttonOptions } = useFeedbackLogic();

  return (
    <div>
      <Header name="give feedback" />
      <Buttons options={buttonOptions} />
      <Statistics counts={counts} derivedStats={derivedStats} />
    </div>
  );
};

export default App;
