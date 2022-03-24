import Content from "../Commons/Content";

type ResultCardProps = {
  imgSrc: string | null;
  title: string;
  width: string;
  height: string;
};

function ResultCard({ imgSrc = null, title = "", width, height }: ResultCardProps) {
  const divStyle = {
    width,
    height,
    borderRadius: "20px",
    border: "1.5px dashed #F2FFFF",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="card-container">
      <Content title={title} content="" />
      <div style={divStyle}>
        {imgSrc ? <img style={{ width, height }} className="card-img" src={imgSrc} alt="" /> : "웹캠을 켜주세요"}
      </div>
    </div>
  );
}

export default ResultCard;
