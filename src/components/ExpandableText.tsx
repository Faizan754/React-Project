import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

function ExpendableText({ children, maxChar = 100 }: Props) {
  const [lessText, setLessText] = useState(true);
  const handleClick = () => {
    setLessText(!lessText);
  };
  const displayText = lessText ? children.slice(0, maxChar) : children;
  if (children.length <= maxChar) {
    return <p>{children}</p>;
  } else
    return (
      <>
        <p>
          {`${displayText}${lessText ? `...` : ``}`}
          <button onClick={handleClick}>{lessText ? "More" : "Less"}</button>
        </p>
      </>
    );
}

export default ExpendableText;
