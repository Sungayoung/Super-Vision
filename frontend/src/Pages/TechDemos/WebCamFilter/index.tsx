import WebCamFilterExperience from "./WebCamFilterExperience";
import WebCamFilterMain from "./WebCamFilterMain";
import { styled } from "@mui/material/styles";

const PageDiv = styled('div')({
  padding: '84px',
  height: '100vh'
})


function WebCamFilterPage() {
  return (
    <div>
      <PageDiv>
        <WebCamFilterMain />
      </PageDiv>
      <PageDiv>
        <WebCamFilterExperience />
      </PageDiv>
    </div>
  );
}

export default WebCamFilterPage;