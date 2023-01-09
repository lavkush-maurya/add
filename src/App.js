import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([{ skill: ""}]);
  
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { skill: ""}]);
  };

  return (
    <div className="App">

      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="skill"
              placeholder="Enter First Name"
              value={x.skill}
              onChange={e => handleInputChange(e, i)}
            />
            
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
