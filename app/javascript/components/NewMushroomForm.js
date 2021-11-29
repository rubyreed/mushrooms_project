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
<div style={styles.container}>
  <h1 style={styles.header}>New Mushroom Form</h1>
    <form style={styles.form} onSubmit = {handleSubmit}>
      <p>Variety:</p>
      <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
      <p>Color:</p>
      <input value = {colorState} onChange = {(e) => setColorState(e.target.value)}/>
      <p>Use:</p>
      <input value = {usageState} onChange = {(e) => setUsageState(e.target.value)}/>
      <br/>
      <button style={styles.button}>Click to Add New Mushroom</button>
    </form>
</div>
);
};

const styles = {
  container: {
    border: "3px solid green",
    margin: "10px",
    padding: "10px",
  },
  header: {
    color: "green",
    textAlign:"center"
  },
button: {
  marginTop: "5px",
  color:"green",
  backgroundColor:"lightGreen",
},
form: {
textAlign:"center"
}
};

export default NewMushroomForm;

