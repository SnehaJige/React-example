import CardCompo, { ButtonComponent, InputComp } from "./01-components";

function ExportCompo() {
  return (
    <>
      <div>
        <p>Input Component</p>
        <InputComp />
      </div>
      <div>
        <p>Button Component</p>
        <ButtonComponent />
      </div>
      <div>
        <CardCompo/>
      </div>
    </>
  );
}

export default ExportCompo;
