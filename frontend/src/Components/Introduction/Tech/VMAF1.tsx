import { ReactNode } from 'react';

// Mui
import { useTheme } from '@material-ui/core'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Local

import Content from '../../Commons/Content'


type VMAFCardProps = {
  imgSrc: string,
  content: string
}

const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: 'flex',
  width: "100%",
  justifyContent: 'center',
  alignItems: 'center'
});

function VMAFCard ({imgSrc, content}: VMAFCardProps) {
  const theme = useTheme()
  return (
    <Card
      sx = {{ 
        bgcolor: theme.palette.primary.dark
      }}
    >
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

function VMAF1 () {
  return (
    <PageDiv id="vmaf">
      <Grid
        container
        justifyItems= 'center'
        alignItems='center'
        >
        <Grid
          item xs = {12}
        >
          <Content
            title='What is VMAF?'
            content='VMAF는 인간 지각 비전 모델링과 인공지능을 결합하여
            1에서 100까지의 품질 점수를 생성하는 비디오 스코어링 시스템입니다.'
          />
          {/* 출처: https://www.nubicom.co.kr/download/download.jsp?file_name=spirent/umetrix/3.spirent_Umetrix_White_Paper_Measuring_Video_Quality_kor.pdf */}
        </Grid>
        <Grid
          item xs = {2}
          >
          <VMAFCard 
            imgSrc='https://github.com/Netflix/vmaf/raw/master/resource/images/vmaf_logo.jpg'
            content='Video Multi-Method Assessment Fusion'
            />
        </Grid>
        <Grid item xs = { 1 }/>
        <Grid
          container
          item xs = { 9 }
          spacing = { 2 }
          
        >
          <Grid
            item xs = { 3 }
          >
            <VMAFCard
              imgSrc='https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png'
              content='VMAF는 넷플릭스에서 개발한 비디오 품질 평가 알고리즘입니다.'
            />
          </Grid>
          <Grid
            item xs = { 3 }
            >
            <VMAFCard
              imgSrc='https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png'
              content='VMAF는 넷플릭스에서 개발한 비디오 품질 평가 알고리즘입니다.'
              />
          </Grid>
          <Grid
            item xs = { 3 }
          >
            <VMAFCard
              imgSrc='https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png'
              content='VMAF는 넷플릭스에서 개발한 비디오 품질 평가 알고리즘입니다.'
              />
          </Grid>

        </Grid>
      </Grid>
    </PageDiv>
  )
}

export default VMAF1