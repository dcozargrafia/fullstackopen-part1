import StatisticLine from './StatisticLine';


const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all} />
          <StatisticLine text='Average' value={average} />
          <StatisticLine text='% Positive' value={positive} />
        </tbody>
      </table>

    </div>
  );
};

export default Statistics;