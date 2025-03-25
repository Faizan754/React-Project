import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [like, setLike] = useState(false);

  const eventHandler = () => {
    setLike(!like);
    onClick();
  };

  return (
    <div onClick={eventHandler}>
      {like ? <GoHeartFill color="red" size={30} /> : <GoHeart size={30} />}
    </div>
  );
}

export default Like;
