import {styled} from '@mui/material/styles'

import Content from '../../../Components/Commons/Content'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Grid from '@material-ui/core/Grid'

import OutsideContentCard from "../../../Components/Cards/OutsideContentCard";



function SuperResolution () {
  return (
    <Grid
      container
    >
      <Grid
        item xs = { 12 }
      >
        <Content 
          title = 'About SUPER RESOLUTION'
          content='이미지 장치의 원래 sampling grid 
          보다 더 높은 해상도의 이미지를 만들기 위해
          Pixel 해상도를 높여서 더 정교한 해상도의
          이미지를 만들어 내는 기술.'
        />
      </Grid>
      <Grid
        container
        alignItems='center'
      >
        <Grid
          item xs = { 3 }
        >

        </Grid>
        <Grid
          item xs = { 4}
        >
          <OutsideContentCard
            title="ORIGINAL"
            content="당신의 웹캠 화질로 보여줍니다."
            imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
          />
        </Grid>

        <ArrowRightIcon sx={{ color: '#F2FFFF', fontSize: 50}}/>
        
        <Grid
          item xs = { 4}
        >
          <OutsideContentCard
            title="ORIGINAL"
            content="당신의 웹캠 화질로 보여줍니다."
            imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjNfMjAz%2FMDAxNjQ1NTUwMzI0MTY3.MWzskL44EosHpy4Yf_QhiMZIU-ZhR8Z7a6aaaBP_mMQg.SJEEhdzFiSERzRrA-S79FtC9NLYidD0PvkesnMD783Ag.JPEG.straw81%2F1645550325180.jpg&type=sc960_832"
          />
        </Grid>
      </Grid>
    </Grid>

  )
}

export default SuperResolution