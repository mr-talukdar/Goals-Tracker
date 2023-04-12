import React from "react";
import GoalsItem from "./GoalsItem/GoalsItem";

function Goals(props) {

  return (
    <div className=" self-center shadow-md shadow-black w-full flex flex-col gap-2">
      {props.goalsData.map((goal) => (
        <GoalsItem goal={goal.text} key={goal.id} id={goal.id} onDelete={props.onDeleteGoal}/>
      ))}
    </div>
  );
}

export default Goals;
