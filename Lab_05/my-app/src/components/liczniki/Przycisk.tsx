interface PrzyciskProps {
  onClickHandler: () => void;
}

function Przycisk(props: PrzyciskProps) {
  return <button onClick={props.onClickHandler}>Dodaj</button>;
}

export default Przycisk;
