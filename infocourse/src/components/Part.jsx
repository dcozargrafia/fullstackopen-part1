const Part = (props) => {
  console.log(props);

  return(
    <h2>
      Part: {props.name} Exercises: {props.exercises}
    </h2>
  );
};

export default Part;