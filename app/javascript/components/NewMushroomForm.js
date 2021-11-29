import axios from "axios";
import React, {useState} from "react";


const NewMushroomForm = (props) => {
const { newestMushroom } = props
const [ varietyState, setVarietyState ] = useState("")
const [ colorState, setColorState ] = useState("")
const [ usageState, setUsageState ] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  const newMushroom = {variety: varietyState, color: colorState, usage: usageState};
  let response = await axios.post("/mushrooms", newMushroom);
  newestMushroom(response.data)
};
return(
<div>
  <h1>New Mushroom Form</h1>
    <form onSubmit = {handleSubmit}>
      <p>Variety:</p>
      <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
      <p>Color:</p>
      <input value = {colorState} onChange = {(e) => setColorState(e.target.value)}/>
      <p>Use:</p>
      <input value = {usageState} onChange = {(e) => setUsageState(e.target.value)}/>
      <button>Click to Add New mushroom</button>
    </form>
</div>
);
};

export default NewMushroomForm;

