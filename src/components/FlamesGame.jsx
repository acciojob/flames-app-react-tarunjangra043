import React, { useState } from "react";

function FlamesGame() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleName1Change = (e) => setName1(e.target.value);
  const handleName2Change = (e) => setName2(e.target.value);

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    const relationship = getFlamesResult(name1, name2);
    setResult(relationship);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  const getFlamesResult = (name1, name2) => {
    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    name1Arr.forEach((char) => {
      const index = name2Arr.indexOf(char);
      if (index !== -1) {
        name2Arr.splice(index, 1);
        name1Arr.splice(name1Arr.indexOf(char), 1);
      }
    });

    const remainingLength = name1Arr.length + name2Arr.length;
    const flamesArray = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    const index = remainingLength % 6;

    return flamesArray[index];
  };

  return (
    <div>
      <input
        type="text"
        data-testid="input1"
        value={name1}
        name="name1"
        onChange={handleName1Change}
        placeholder="Enter first name"
      />
      <input
        type="text"
        data-testid="input2"
        value={name2}
        name="name2"
        onChange={handleName2Change}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default FlamesGame;
