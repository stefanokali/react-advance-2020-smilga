import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  /*Use non-function to setPeople()
  const removeName = (id) => {
    const updatedData = people.filter((person) => person.id !== id);
    setPeople(updatedData);
  };*/

  /*Use function to setPeople()*/
  const removeName = (id) => {
    setPeople((prevPeople) => {
      const updatedData = prevPeople.filter((person) => person.id !== id);
      return updatedData;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeName(id)}>remove name</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
