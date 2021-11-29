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

  const deleteMushroom = async (id) => {
    let response = await axios.delete(`/mushrooms/${id}`);
    let filteredMushrooms = mushroomsArray.filter((single_mushroom) => single_mushroom.id !== id);
    setMushroomsArray(filteredMushrooms);
  };

return (
<div>
<h1> App component </h1>
<NewMushroomForm newestMushroom = {displayNewMushroom}/>
<Mushrooms multiple_mushrooms={mushroomsArray} deleteMushroom={deleteMushroom}/>
</div>
);
};

export default App;
