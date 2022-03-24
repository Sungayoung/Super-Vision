import Grid from '@mui/material/Grid'
import './Introduction.css'

// Local
import Sidebar from "../../Components/Bars/SideBar"
import CNN from "../../Components/Introduction/Tech/CNN"
import SuperResolution from "../../Components/Introduction/Tech/SuperResolution"
import VMAF1 from "../../Components/Introduction/Tech/VMAF1"
import VMAF2 from "../../Components/Introduction/Tech/VMAF2"
import Project from "../../Components/Introduction/Project/Project"


function Introduction () {
  return (
    <div className="introduction">
      <h1>Introduction</h1>
      <Grid container>
        <Grid
          className="introSideBar"
          item xs={2}>
          <Sidebar />
        </Grid>
        <Grid
          className="introMain"
          item xs={10}>
          <CNN></CNN>
          <SuperResolution></SuperResolution>
          <VMAF1></VMAF1>
          <VMAF2></VMAF2>
          <Project></Project>
        </Grid>
      </Grid>
    </div>
  )
}

export default Introduction