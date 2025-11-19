import { useState } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Header = ({ name, options }) => {
  return (
    <>
      <h1>{name}</h1>
      <div>
        {options.map((option) => (
          <Button
            key={option.name}
            onClick={option.handleClick}
            name={option.name}
          />
        ))}
      </div>
    </>
  );
};

const Statistic = ({ name, total }) => (
  <p>
    {name} {total}
  </p>
);

const Statistics = ({ options }) => {
  return (
    <>
      <h2>statistics</h2>
      {options.map((option) => (
        <Statistic key={option.name} name={option.name} total={option.total} />
      ))}
    </>
  );
};

const App = () => {
  const [goodTotal, setGoodTotal] = useState(0);
  const [neutralTotal, setNeutralTotal] = useState(0);
  const [badTotal, setBadTotal] = useState(0);

  const handleGoodClick = () =>
    setGoodTotal((prevGoodTotal) => prevGoodTotal + 1);
  const handleNeutralClick = () =>
    setNeutralTotal((prevNeutralTotal) => prevNeutralTotal + 1);
  const handleBadClick = () => setBadTotal((prevBadTotal) => prevBadTotal + 1);

  const feedback = {
    name: "give feedback",
    options: [
      {
        name: "good",
        total: goodTotal,
        handleClick: handleGoodClick,
      },
      {
        name: "neutral",
        total: neutralTotal,
        handleClick: handleNeutralClick,
      },
      {
        name: "bad",
        total: badTotal,
        handleClick: handleBadClick,
      },
    ],
  };

  return (
    <div>
      <Header name={feedback.name} options={feedback.options} />
      <Statistics options={feedback.options} />
    </div>
  );
};

export default App;
