
// Mui
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import { useTheme } from '@material-ui/core'


import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

// Local
import './CNN.css'

type Props = {
  isDark: boolean
}

const PageDiv = styled("div")({
  position: "relative",
  height: "100%",
  width: "99.5vw",
});


function LayerSquare ({ isDark } : Props) {
  const theme = useTheme()
  const dark = theme.palette.primary.main
  const light = theme.palette.primary.main

  return (
    <Grid
      marginX={-2}
    >
      <div className="box" >
        <div className="cnnLayer rotateY">
          <div className={ 'fill' + ' ' + (isDark? 'brightBox' : 'darkBox')}></div>
        </div>
      </div>
    </Grid>
  )
}

function CNN () {

  return (
    <PageDiv>
      <Grid 
        className="CNN"
        container
        >
        <Grid
          container
          item xs={2}
          justifyContent='center'
          pt = {10}
          ml = {10}
        >
          <div>
            <h1>Convolution</h1>
            <h1>Neural</h1>
            <h1>Network</h1>
          </div>
        </Grid>
        <Grid 
          container
          item xs = {9}
          marginLeft = {2}
        >
          <LayerSquare isDark={true} />
          <LayerSquare isDark={false} />
          <LayerSquare isDark={true} />
          <LayerSquare isDark={false} />
        </Grid>
      </Grid>
      {/* 레이어별 설명 박스가 들어갈 부분 */}

      {/* <Container >
        <Box
          marginLeft={0}
          marginRight = { 0 }
          sx={{ bgcolor: '#cfe8fc', height: '5vh' }} 
        />
        <h1>아아</h1>

      </Container> */}
    </PageDiv>
  )
}

export default CNN
