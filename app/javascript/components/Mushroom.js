import React, {useState} from "react"
import UpdateMushroomForm from "./UpdateMushroomForm";


const Mushroom = (props) => {
  const [showUpdateMushroomForm, setShowUpdateMushroomForm] = useState(false);
  const { info, deleteMushroom, updateMushroom } = props;

  const toggleUpdateMushroomForm = () => {
    setShowUpdateMushroomForm(!showUpdateMushroomForm);
  };

  return(
    <div style={styles.info}>
      <h3>Variety: {info.variety}</h3>
      <h3>Color: {info.color}</h3>
      <h3>Usage: {info.usage}</h3>

      <button style={styles.button} onClick = {toggleUpdateMushroomForm}>
        {showUpdateMushroomForm ? "Cancel" : "Update Mushroom"}
      </button>

      {showUpdateMushroomForm && <UpdateMushroomForm id={info.id}
       variety={info.variety} color = {info.color} usage = {info.usage}
        updateMushroom={updateMushroom}/>}

      <button style={styles.button} onClick={() => deleteMushroom(info.id)}>Delete This Mushroom</button>
      
      <hr />
    </div>
  )
};
const styles = {
  button:{
    marginLeft:"5px",
    backgroundColor:"orange",
    color:"white",
  },
  info: {
    textAlign:"center"
  },
 
};

export default Mushroom;