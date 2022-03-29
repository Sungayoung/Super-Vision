import './Project.css'

// Mui
import { useTheme } from '@material-ui/core'
import { styled } from "@mui/material/styles";

import Grid from '@mui/material/Grid'
// import Container from "@mui/material/Container"
// import Box from "@mui/material/Box"
import logo from '../../../Assets/Image/logoWhite.png'

// import logo from "../../Assets/Image/logo.png";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';




const PageDiv = styled("div")({
  position: "relative",
  height: "100%",
  width: "99.5vw",
});

const sampleTitle = '아아'
const sampleContent = '에에'
const sampleImgSrc = "https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg"

type sampleImgCardProps = {
  children: ReactNode,
  title: string,
  content: string,
  imgSrc: string
}

function SampleImgCard ({title, content, imgSrc} : sampleImgCardProps) {
  return (
    <Card>
      <CardHeader>
        <p>{ title }</p>
      </CardHeader>
      <CardMedia
        component="img"
        image = { imgSrc }
      >
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { content }
        </Typography>
      </CardContent>
    </Card>
  )
}

function Project () {
  return (
    <PageDiv>
      <Grid 
        className="CNN"
        container
        columns={{ xs: 2}}
      >
        <Grid
          container
          xs={3}
          justifyContent='center'
          pt = {10}
          ml = {10}
        >
          <img
            className='ProjectLogo'
            src={logo} 
            alt=""
            // style = { width: 100% }
          />
        </Grid>
        <Grid 
          container
          xs = { 8 }
          // item
          // item xs = {9}
          // marginLeft = {2}
          // columns = {{xs: 2 }}
          padding = {2}
        >
          <Grid
            item

          >            
            <SampleImgCard
              title = { sampleTitle }
              content = { sampleContent }
              imgSrc = { sampleImgSrc }
            >
            </SampleImgCard>

          </Grid>
          <Grid
            item
          >            
            <SampleImgCard
              title = { sampleTitle }
              content = { sampleContent }
              imgSrc = { sampleImgSrc }
            >
            </SampleImgCard>
          </Grid>


        </Grid>
      </Grid>
    </PageDiv>
  )
}

export default Project