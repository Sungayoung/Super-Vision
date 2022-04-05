import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

type BtnProps = {
  isDisabled?: boolean;
  content: string;
  onClick?: Function;
  rounded?: boolean;
};


function Btn({
  isDisabled = false,
  content = "",
  onClick = () => console.warn("클릭 이벤트가 지정되지 않음"),
  rounded = true,
}: BtnProps) {

  const CustomBtn = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: (rounded ? "10px 20px" : "13px 26px"),
    lineHeight: 1.5,
    color: "#F2FFFF",
    borderRadius: rounded ? 100 : 0,
    backgroundColor: isDisabled ? "#9fa5a8" : (rounded ? "#5F7B84" : "#051527"),
    border: "1.5px solid",
    borderColor: isDisabled ? "#9fa5a8" : (rounded ? "#5F7B84" : "#F2FFFF"),
    fontFamily: ["Pretendard-Regular"].join(","),
    "&:hover": {
      backgroundColor: isDisabled ? "#9fa5a8" : (rounded ? "#39424E" : "#F2FFFF"),
      borderColor: isDisabled ? "#9fa5a8" : (rounded ? "#39424E" : "#F2FFFF"),
      boxShadow: "none",
      color: rounded ? "#F2FFFF" : "#39424E",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: isDisabled ? "#9fa5a8" : (rounded ? "#39424E" : "#F2FFFF"),
      borderColor: isDisabled ? "#9fa5a8" : (rounded ? "#39424E" : "#F2FFFF"),
      color: rounded ? "#F2FFFF" : "#39424E",
    },
  });

  return (
    <div>
      <CustomBtn variant="contained" onClick={() => onClick()}>
        {content}
      </CustomBtn>
    </div>
  );
}

export default Btn;
