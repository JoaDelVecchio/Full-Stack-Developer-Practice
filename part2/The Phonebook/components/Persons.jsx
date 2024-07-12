const Persons = ({ persons, filter }) => {
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
    </tr>
  ));
};

export default Persons;
