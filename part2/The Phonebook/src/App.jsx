import { useState } from "react";
import Persons from "../components/Persons";
import FilterSearchBar from "../components/FilterSearchBar";
import Form from "../components/Form";
const App = () => {
  const handleNewData = (event) => {
    event.preventDefault();
    if (isRepeated(newName)) {
      alert(`The name '${newName}' is already on the book`);
      return;
    } else if (isRepeated(newPhone)) {
      alert(`The phone '${newPhone}' is already on the book`);
      return;
    } else {
      let newPersons = [...persons, { name: newName, phone: newPhone }];
      setPersons(newPersons);
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const isRepeated = (newName) => {
    return !(persons.find((person) => person.name === newName) === undefined);
  };

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "1168777081" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterSearchBar filter={newFilter} handleFilter={handleNewFilter} />
      <Form
        handleNewData={handleNewData}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <table>
        <tbody>
          <Persons persons={persons} filter={newFilter} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
