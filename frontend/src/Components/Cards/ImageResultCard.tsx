import { styled } from "@mui/material/styles";

type ImageResultCardProps = {
  file: Blob;
  imgPreviewUrl: string;
  isImgPreview: boolean;
};

function ImageResultCard ({file, imgPreviewUrl, isImgPreview}: ImageResultCardProps) {

  const TitleSpan = styled("span")({
    color: "#CEF3FF",
    fontSize: "24px",
    fontWeight: "600",
    padding: "5px",
  });

  const ContentSpan = styled("span")({
    fontSize: "18px",
    padding: "10px",
    whiteSpace: "pre-wrap",
    textAlign: 'center',
  });


  return (
    <div className="card_container">
      <TitleSpan>AFTER</TitleSpan>
      {isImgPreview && <img className="full_img_card" src={imgPreviewUrl} alt="img" />}
      {!isImgPreview && 
        <div className="blank_card">
          <ContentSpan>사진을 업로드하면{"\n"}결과를 확인할 수 있습니다.</ContentSpan>
        </div>
      }
    </div>
  )
}

export default ImageResultCard