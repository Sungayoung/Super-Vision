// import { useState, useEffect } from 'react'

import WebCamFilterExperience from "./WebCamFilterExperience";
import WebCamFilterMain from "./WebCamFilterMain";
import { styled } from "@mui/material/styles";

const PageDiv = styled('div')({
  marginTop: '84px',
  // paddingBottom: '10px',
  height: '100vh'
})


function WebCamFilterPage() {
  // const [page, setPage] = useState<number>(0);
  // const MIN_PAGE = 0
  // const MAX_PAGE = 1
  // useEffect(() => {
  //   window.addEventListener("wheel", handleScroll);
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, window.innerHeight * page)
  // }, [page])

  // const handleScroll = (e: WheelEvent) => {
  //   if (e.deltaY === 100) {
  //     setPage(prev => prev + 1 > MAX_PAGE ? MAX_PAGE : prev + 1)
  //   }
  //   else if (e.deltaY === -100) {
  //     setPage(prev => prev - 1 < MIN_PAGE ? MIN_PAGE : prev - 1)
  //   }
  // };
  return (
    <div>
      <PageDiv>
        <WebCamFilterMain/>
      </PageDiv>
      <PageDiv>
        <WebCamFilterExperience />
      </PageDiv>
    </div>
  );
}

export default WebCamFilterPage;
