import StatisticLine from "./StatisticLine";

// Statistics
const Statistics = ( props ) => {
    return (
      <>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.all} />
        <StatisticLine text="positive" value={props.positive + " %"} />
      </>
    );
  };

  export default Statistics