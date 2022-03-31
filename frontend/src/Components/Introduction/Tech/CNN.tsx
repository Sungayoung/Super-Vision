// Mui
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import { useTheme } from '@material-ui/core'

// Local
import CodeTextBox from '../../TextBoxes/CodeTextBox'
import './CNN.css'

type Props = {
  isDark: boolean
}

const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: 'flex',
  width: "100%",
  justifyContent: 'center',
  alignItems: 'center'
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
    <PageDiv id="cnn">
      <div>
        <Grid 
          className="CNN"
          container
          >
          <Grid
            container
            item xs={12} sm = {2}
            pt = {{ xs: 1, sm: 10}}
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
          >
            <LayerSquare isDark={true} />
            <LayerSquare isDark={false} />
            <LayerSquare isDark={true} />
            <LayerSquare isDark={false} />
          </Grid>
        </Grid>
      {/* 레이어별 설명 박스가 들어갈 부분 */}
      </div>
    </PageDiv>
  )
}

export default CNN
