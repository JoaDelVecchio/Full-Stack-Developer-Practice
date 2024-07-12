const Form = ({
  handleNewData,
  handleNewName,
  handleNewPhone,
  newName,
  newPhone,
}) => (
  <form onSubmit={handleNewData}>
    <div>
      name: <input value={newName} onChange={handleNewName} />
    </div>
    <div>
      phone numbers: <input value={newPhone} onChange={handleNewPhone} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
export default Form;
