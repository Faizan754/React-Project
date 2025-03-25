import { FormEvent, useState } from "react";

function Form() {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleClick}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
