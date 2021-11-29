import React from "react"
import Mushroom from "./Mushroom";

const Mushrooms = (props) => {
  const {multiple_mushrooms, deleteMushroom, updateMushroom} = props
return(
<div>
<h1>List of Mushrooms</h1>
{multiple_mushrooms.map((single_mushroom) => (
  <Mushroom key = {single_mushroom.id} info={single_mushroom} deleteMushroom={deleteMushroom} updateMushroom={updateMushroom}/>
))}
</div>
);
};

export default Mushrooms;
