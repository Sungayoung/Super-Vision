import './Project.css'

// Mui
import { useTheme } from '@material-ui/core'
import { styled } from "@mui/material/styles";

import Grid from '@mui/material/Grid'
import logo from '../../../Assets/Image/logoWhite.png'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { ReactNode } from 'react';


const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: 'flex',
  width: "100%",
  justifyContent: 'center',
  alignItems: 'center'
});

const sampleTitle = '아아'
const sampleContent = '에에'
const sampleImgSrc = "https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg"
const filters = [
  {
    title: '',
    content: '',
    imgSrc: '',
  },
  {
    title: '',
    content: '',
    imgSrc: '',
  },
  {
    title: '',
    content: '',
    imgSrc: '',
  },
  {
    title: '',
    content: '',
    imgSrc: '',
  },
  {
    title: '',
    content: '',
    imgSrc: '',
  },
  {
    title: '',
    content: '',
    imgSrc: '',
  },
]


type sampleImgCardProps = {
  children: ReactNode,
  title: string,
  content: string,
  imgSrc: string
}

function SampleImgCard ({title, content, imgSrc} : sampleImgCardProps) {
  const theme = useTheme()
  return (
    <Card
      id="project"
      sx = {{ 
        bgcolor: theme.palette.primary.dark
      }}
    >
      <CardContent
        className='py-1'
      >
        <Typography 
          className = 'text-center'
          variant="body1" 
          color={ theme.palette.primary.contrastText }
        >
          { title }
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image = { imgSrc }
      >
      </CardMedia>
      <CardContent
        className='py-1'
      >
        <Typography
          className = 'text-center'
          variant="body2" 
          color={ theme.palette.primary.contrastText }>
          { content }
        </Typography>
      </CardContent>
    </Card>
  )
}

function Project () {
  return (
    <PageDiv id="super-vision">
      <Grid 
        className="CNN"
        container
        columns={{ xs: 2}}
      >
        <Grid
          container
          xs={3}
          justifyContent='center'
          alignContent= 'center' 
          // pt = {10}
          ml = {10}
        >
          <div>
            <img
              className='ProjectLogo'
              src={logo} 
              alt=""
            />
            <Typography>
              Super Resolution 기술을 이용해
              이미지 및 영상의 화질을 개선하는 서비스입니다.
            </Typography>
          </div>
        </Grid>
        <Grid 
          container
          xs = { 8 }
          spacing = { 2 }
          padding = {2}
        >
          {Array.from(Array(6)).map((_, index) => 
            <Grid
              item
              xs={ 4 }
            >
              <div>
                <SampleImgCard
                  title = { sampleTitle }
                  content = { sampleContent }
                  imgSrc = { sampleImgSrc }
                >
                </SampleImgCard>
              </div>            
            </Grid>
          )}
        </Grid>
      </Grid>
    </PageDiv>
  )
}

export default Project