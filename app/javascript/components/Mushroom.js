import React from "react"

const Mushroom = (props) => {
  const { info, deleteMushroom } = props;
  return(
    <div>
      <h3>Variety: {info.variety}</h3>
      <h3>Color: {info.color}</h3>
      <h3>Usage: {info.usage}</h3>
      <button onClick={() => deleteMushroom(info.id)}>Delete This Mushroom</button>
      <hr />
    </div>
  )
};

export default Mushroom;