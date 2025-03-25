import { produce } from "immer";
import { useState } from "react";

function StateArr() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  //   const handleFix = () => {
  //     setBugs(
  //       produce((draft) => {
  //         const bug = draft.find((bug) => bug.id === 1);
  //         if (bug) bug.fixed = true;
  //       })
  //     );
  //   };

  const handleFix = () => {
    setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <h2>Current Errors:</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ul>

      <button onClick={handleFix}>Fix Bug</button>
    </div>
  );
}

export default StateArr;
