import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Mushrooms from './Mushrooms';
import NewMushroomForm from './NewMushroomForm';

const App = () => {

  const [mushroomsArray, setMushroomsArray] = useState([]);

  useEffect(() => {
    getMushrooms();
  },[]);

  const getMushrooms = async () => {
    let response = await axios.get ("/mushrooms")
    setMushroomsArray(response.data)
  };

  const displayNewMushroom = (newMushroom) => {
    setMushroomsArray([newMushroom,...mushroomsArray])
  };

  const updateMushroom = (changedMushroom) => {
    let updatedMushrooms = mushroomsArray.map((single_mushroom) => (single_mushroom.id === changedMushroom.id ? changedMushroom : single_mushroom));
  setMushroomsArray(updatedMushrooms)
  };
  

  const deleteMushroom = async (id) => {
    let response = await axios.delete(`/mushrooms/${id}`);
    let filteredMushrooms = mushroomsArray.filter((single_mushroom) => single_mushroom.id !== id);
    setMushroomsArray(filteredMushrooms);
  };

return (
<div style={styles.container}>
<h1 style={styles.header}> Mushroom Info App</h1>
<NewMushroomForm newestMushroom = {displayNewMushroom}/>
<Mushrooms multiple_mushrooms={mushroomsArray} deleteMushroom={deleteMushroom} updateMushroom={updateMushroom}/>
</div>
);
};

const styles = {
  container: { border: "2px solid purple", maxWidth: "800px", 
  margin: "10px", padding: "10px"},
  header: {
    color: "blue",
  },
};

export default App;
