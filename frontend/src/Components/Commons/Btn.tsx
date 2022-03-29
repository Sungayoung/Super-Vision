import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";

type BtnProps = {
  content: string;
  onClick?: Function;
};

const CustomBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  padding: '10px 20px',
  lineHeight: 1.5,
  color: '#F2FFFF',
  borderRadius: 100,
  backgroundColor: '#5F7B84',
  borderColor: '#5F7B84',
  fontFamily: [
    'Pretendard-Regular',
  ].join(','),
  '&:hover': {
    backgroundColor: '#39424E',
    borderColor: '#39424E',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#39424E',
    borderColor: '#39424E',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #39424E',
  },
});

function Btn({ 
  content="",
  onClick=() => console.warn('클릭 이벤트가 지정되지 않음')
}: BtnProps) {
  return (
    <CustomBtn variant="contained" onClick={() => onClick()}>{content}</CustomBtn>
  );
}

export default Btn;
