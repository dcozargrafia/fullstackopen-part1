const Total = (props) => {
  console.log(props);

  return (
    <p>Total of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
  
};

export default Total;