import { useState, useEffect } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Header = ({ name, options }) => (
  <>
    <h1>{name}</h1>
    {options.map(({ name, handleClick }) => (
      <Button key={name} onClick={handleClick} name={name} />
    ))}
  </>
);

const Statistic = ({ name, count }) => {
  if (name === "positive") {
    return (
      <tr>
        <td>{name}</td>
        <td>{count} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
    </tr>
  );
};

const Statistics = ({ options }) => {
  const totalCount = options.reduce((total, option) => total + option.count, 0);
  const goodCount = options[0].count;
  const badCount = options[2].count;
  const average = (goodCount * 1 + badCount * -1) / totalCount;
  const positivePercentage = (goodCount / totalCount) * 100;

  useEffect(() => {
    console.log(`current total feedback count is ${totalCount}`);
    console.log(`current average is ${average}`);
    console.log(`current positive percentage is ${positivePercentage}`);
  }, [totalCount, average, positivePercentage]);

  if (totalCount === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback has been provided yet</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          {options.map(({ name, count }) => (
            <Statistic key={name} name={name} count={count} />
          ))}
          <Statistic name="all" count={totalCount} />
          <Statistic name="average" count={average} />
          <Statistic name="positive" count={positivePercentage} />
        </tbody>
      </table>
    </>
  );
};

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
      count: feedbackCounts.good,
      handleClick: handleFeedbackClick("good"),
    },
    {
      name: "neutral",
      count: feedbackCounts.neutral,
      handleClick: handleFeedbackClick("neutral"),
    },
    {
      name: "bad",
      count: feedbackCounts.bad,
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
