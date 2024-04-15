import React, { useState } from 'react'
import './App.css';
import ColorBlock from './colorBlock';
import ColorForm from './colorForm';  


function App() {
  let [colors, setColors] = useState( ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']); 
  let colorMap = colors.map((color, i) => {
    return(
      <ColorBlock key={i} color={color}/>
    )
  })

  const addColor = (newColor) =>{
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
    <h1>React Rainbow </h1>
    {colorMap}
  
   <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
