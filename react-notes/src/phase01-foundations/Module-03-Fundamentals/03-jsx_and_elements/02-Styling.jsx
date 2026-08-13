import "./style.css";

function Styles() {
  return (
    <>
      {/* Inline Style */}
      <div
        style={{
          height: "20vh",
          width: "20vw",
          backgroundColor: "red",
          margin: "50px",
        }}
      ></div>
      <div className="box-style">gdf</div>
    </>
  );
}

export default Styles;
