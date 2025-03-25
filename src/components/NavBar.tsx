interface Props {
  cartItemsCount: number;
}

function Nav({ cartItemsCount }: Props) {
  return (
    <>
      <h2>No. Of Products: {cartItemsCount}</h2>
    </>
  );
}

export default Nav;
