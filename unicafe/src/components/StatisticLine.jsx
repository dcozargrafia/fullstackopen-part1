
const StatisticLine = (props) => {
  const { text, value } = props;

  return (
    // <p>{text}: {value}</p>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;