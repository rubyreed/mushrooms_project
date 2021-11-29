import React from "react"
import Mushroom from "./Mushroom";

const Mushrooms = (props) => {
  const {multiple_mushrooms, deleteMushroom, updateMushroom} = props
return(
<div style={styles.container}>
<h1 style={styles.header}>List of Mushrooms</h1>
{multiple_mushrooms.map((single_mushroom) => (
  <Mushroom key = {single_mushroom.id} info={single_mushroom} deleteMushroom={deleteMushroom} updateMushroom={updateMushroom}/>
))}
</div>
);
};

const styles = {
  container: {
    border: "3px solid red",
    margin: "10px",
    padding: "10px"
  },
  header: { 
    color: "orange",
    textAlign:"center"
  },

}

export default Mushrooms;
