interface ProduktProps {
  nazwa: string;
}

function Produkt(props: ProduktProps) {
  return <div>{props.nazwa}</div>;
}

export default Produkt;
