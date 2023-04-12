import "./App.css";
import NewGoal from "./AddGoals/NewGoal";
import Goals from "./Goals/Goals";
import { useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  const AddGoalsHandler = (addedGoal) => {
    setGoals((prevGoal) => {
      return [addedGoal, ...prevGoal];
    });
    console.log(goals);
  };

  const deleteGoalsHandler=removedGoal=>{
    setGoals(prevGoals=>{
      const updatedGoals=prevGoals.filter(goal=>goal.id!==removedGoal)
      return updatedGoals;
    })
  }

  return (
    <div className=" w-full h-fit flex flex-col gap-8 p-8">
      <NewGoal addGoalsHandler={AddGoalsHandler} />
      <Goals goalsData={goals} onDeleteGoal={deleteGoalsHandler} />
    </div>
  );
}

export default App;
