import Grid from '@mui/material/Grid'
import './Introduction.css'
// mui
import { styled } from "@mui/material/styles";

// Local
// 사이드 바 
import Sidebar from "../../Components/Bars/SideBar"
// Pages
import CNN from "../../Components/Introduction/Tech/CNN"
import SuperResolution from "../../Components/Introduction/Tech/SuperResolution"
import VMAF1 from "../../Components/Introduction/Tech/VMAF1"
import VMAF2 from "../../Components/Introduction/Tech/VMAF2"
import Project from "../../Components/Introduction/Project/Project"
// components
import Content from '../../Components/Commons/Content'


const PageDiv = styled("div")({
  position: "relative",
  height: "45vw",
  // width: "99.5vw",
});


function Introduction () {
  return (
    <Grid 
      container
      marginTop={5}
    >
      <Grid
        className = "introSideBar"
        item xs = {3}
      >
        <Sidebar />
      </Grid>
      <Grid
        className = "introMain"
        item xs = {9}
        marginTop = {10}
      >
        <PageDiv>
          <CNN />
        </PageDiv>

        <SuperResolution />
        <VMAF1 />
        <VMAF2 />
        <Project />
      </Grid>
    </Grid>
  )
}

export default Introduction