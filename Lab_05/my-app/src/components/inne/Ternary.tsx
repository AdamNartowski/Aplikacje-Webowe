function Ternary() {
  let a: boolean = true;
  let b: boolean = false;

  return (
    <div>
      <div>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>
      <div>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </div>
    </div>
  );
}

export default Ternary;
