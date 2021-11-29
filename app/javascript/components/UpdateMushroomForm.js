import axios from "axios";
import React, {useState} from "react";


const UpdateMushroomForm = (props) => {
const { id, variety, color, usage, updateMushroom } = props
const [ varietyState, setVarietyState ] = useState(variety)
const [ colorState, setColorState ] = useState(color)
const [ usageState, setUsageState ] = useState(usage)

const handleSubmit = async (e) => {
  e.preventDefault();
  const updatedMushroom = {variety: varietyState, color: colorState, usage: usageState};
  let response = await axios.put(`/mushrooms/${id}`, updatedMushroom);
  updateMushroom(response.data)
};
return(
<div>
  <h2>Update Mushroom:</h2>
    <form onSubmit = {handleSubmit}>
      <p>Variety:</p>
      <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
      <p>Color:</p>
      <input value = {colorState} onChange = {(e) => setColorState(e.target.value)}/>
      <p>Usage:</p>
      <input value = {usageState} onChange = {(e) => setUsageState(e.target.value)}/>
      <br/>
      <button>Click to Update Mushroom</button>
    </form>
</div>
);
};

export default UpdateMushroomForm;

