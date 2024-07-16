import { useState, useEffect } from "react";
import Persons from "../components/Persons";
import FilterSearchBar from "../components/FilterSearchBar";
import Form from "../components/Form";
import personsService from "./services/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((persons) => setPersons(persons));
  }, []);

  const handleNewData = (event) => {
    event.preventDefault();
    if (isRepeated(newName)) {
      alert(`El nombre '${newName}' ya está en la lista`);
      return;
    } else if (isRepeated(newPhone)) {
      alert(`El teléfono '${newPhone}' ya está en la lista`);
      return;
    } else {
      const newPerson = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
      };

      personsService.create().then((newPerson) => {
        setPersons([...persons, newPerson]);
        setNewName("");
        setNewPhone("");
      });
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
