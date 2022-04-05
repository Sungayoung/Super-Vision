import { styled } from "@mui/material/styles";
import explainSuperResolution from "../../../Assets/Image/explainSuperResolution.png";
import Content from "../../../Components/Commons/Content";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Grid from "@material-ui/core/Grid";

import OutsideContentCard from "../../../Components/Cards/OutsideContentCard";

const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

function SuperResolution() {
  return (
    <PageDiv id="super-resolution">
      <Content
        title="About SUPER RESOLUTION"
        content="이미지 장치의 원래 sampling grid 
            보다 더 높은 해상도의 이미지를 만들기 위해\n
            Pixel 해상도를 높여서 더 정교한 해상도의
            이미지를 만들어 내는 기술."
      />
      <img style={{marginTop: '4rem'}} src={explainSuperResolution} alt="explainSuperResolution" />
    </PageDiv>
  );
}

export default SuperResolution;
