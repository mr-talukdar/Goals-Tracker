import React from "react";

function GoalsItem(props) {
    const deleteHandler = () => {
       
        props.onDelete(props.id);
        console.log(props.id+' is being deleted')
      };
  return (
    <div className="bg-primary rounded  px-6 py-2 text-white w-full" onClick={deleteHandler}>{props.goal}</div>
  );
}

export default GoalsItem;
