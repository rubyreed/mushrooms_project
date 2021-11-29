import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Mushrooms from './Mushrooms';
import NewMushroomForm from './NewMushroomForm';

const App = () => {

  const [mushroomsArray, setMushroomsArray] = useState([]);

  const getMushrooms = async () => {
    let response = await axios.get ("/mushrooms")
    setMushroomsArray(response.data)
  };

  const displayNewMushroom = (newMushroom) => {
    setMushroomsArray([newMushroom,...mushroomsArray])
  };

useEffect(() => {
  getMushrooms();
},[]);

return (
<div>
<h1> App component </h1>
<NewMushroomForm newestMushroom = {displayNewMushroom}/>
<Mushrooms multiple_mushrooms={mushroomsArray}/>
</div>
);
};

export default App;
