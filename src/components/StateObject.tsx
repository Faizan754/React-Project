import { useState } from "react";

interface Props {
  onClick?: () => void;
}

function StateObj({ onClick }: Props) {
  const [person, setPerson] = useState({
    name: "Faizan",
    age: 18,
    address: {
      city: "SDK",
      zipcode: 64350,
    },
  });

  const handleClick = () => {
    setPerson({ ...person, address: { ...person.address, zipcode: 64351 } });
    onClick?.();
  };

  return (
    <div>
      zipcode of {person.name} is: {person.address.zipcode} <br />
      <button onClick={handleClick}>Update zipcode</button>
    </div>
  );
}

export default StateObj;
