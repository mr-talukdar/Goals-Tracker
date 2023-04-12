import React, { useState } from "react";

function NewGoal(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [empty, setEmpty] = useState(true);

  const onChangeHandler = (event) => {
    setEnteredGoal((prevGoal) => event.target.value);
    if (enteredGoal.trim().length > 0) {
      setEmpty((prevValue) => true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newGoalData = {
      text: enteredGoal,
      id: Math.random().toString(),
    };
    if (enteredGoal.trim().length === 0) {
      setEmpty((prevValue) => false);
      console.log(empty);
      return;
    }
    props.addGoalsHandler(newGoalData);
    setEnteredGoal("");
  };

  return (
    <div className=" self-center w-full h-fit shadow-md shadow-black  rounded-md  ">
      <div className="p-5">
        <form className="flex flex-col gap-2">
          <div className="font-bold"> Course Goal</div>
          <input
            className={
              !empty
                ? " bg-red-500/25 border-red-700 w-full border-2 "
                : " w-full border-2"
            }
            onChange={onChangeHandler}
          />

          <button
            className="bg-primary w-1/3 text-white text-center hover:bg-secondary"
            onClick={submitHandler}
            type="submit"
          >
            Add Goal
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewGoal;
