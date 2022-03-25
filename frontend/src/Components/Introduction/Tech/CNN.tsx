import React from "react"
// Local
import './CNN.css'
// Mui
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import { useTheme } from '@material-ui/core'

const PageDiv = styled("div")({
  position: "relative",
  height: "100%",
  width: "99.5vw",
});

type Props = {
  isDark: boolean
}

function LayerSquare ({ isDark } : Props) {
  return (
    <Grid
      
    >
      <div className="card" >
        <div className="box rotateY">
          <div className={ 'fill' + ' ' + (isDark? 'brightBox' : 'darkBox')}></div>
        </div>
      </div>
    </Grid>
  )
}

function CNN () {
  const theme = useTheme()
  console.log(theme.palette.primary.main)
  return (
    <PageDiv>
      <Grid 
        className="CNN"
        container
        >
        <Grid
          className="cnnName"
          ml = {10}
          container
          item xs={2}
        >
            <h1>Convolution</h1>
            <h1>Neural</h1>
            <h1>Network</h1>
        </Grid>
        <Grid 
          item xs={9}
          container
        >
          <LayerSquare isDark={true} />
          <LayerSquare isDark={false} />
          <LayerSquare isDark={true} />
          <LayerSquare isDark={false} />
        </Grid>
      </Grid>
      
    </PageDiv>
  )
}

export default CNN



// const layers = [
//   {
//     id: '',
//     color: '',
//     description: '',
//     title: '',
//   }
// ]