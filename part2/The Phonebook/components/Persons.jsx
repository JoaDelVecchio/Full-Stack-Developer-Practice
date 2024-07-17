import axios from "axios";
import personsService from "../src/services/persons";

const Persons = ({ persons, filter, setPersons }) => {
  const handleDeletion = (id) => {
    const person = persons.find((person) => person.id == id);
    if (window.confirm(`Are you sure you want to delete ${person.name}?`))
      personsService
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)));
  };

  if (filter != "") {
    let newPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    persons = newPersons;
  }

  return persons.map((person, index) => (
    <tr key={index}>
      <td>{index + 1}.</td>
      <td>{person.name}</td>
      <td>{person.phone}</td>
      <td>
        <button
          onClick={() => {
            handleDeletion(person.id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default Persons;
