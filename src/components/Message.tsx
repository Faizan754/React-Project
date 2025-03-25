import { useState } from "react";
function Message() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>Function 1:</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        {showMessage ? "HideText" : "Show Text"}
      </button>
      {showMessage && <p>Hellow World!</p>}
    </div>
  );
}

export default Message;
