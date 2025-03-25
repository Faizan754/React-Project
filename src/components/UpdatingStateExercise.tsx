interface Game {
  id: number;
  player: {
    name: string;
  };
}

interface Props {
  game: Game[];
  onUpdate: () => void;
}

function StateGame({ game, onUpdate }: Props) {
  return (
    <div>
      <ul>
        {game[0].id} {game[0].player.name}
      </ul>
      <button onClick={onUpdate}>Update Name</button>
    </div>
  );
}

export default StateGame;
