import { styled } from "@mui/material/styles";

type ContentProps = {
  title: string;
  content: string;
};

const ContentDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TitleSpan = styled("span")({
  color: "#CEF3FF",
  fontSize: "2rem",
  fontWeight: "600",
  padding: "5px",
});

const ContentSpan = styled("span")({
  padding: "10px",
  whiteSpace: "pre-wrap",
  textAlign: 'center',
});

function Content({ title, content }: ContentProps) {
  return (
    <ContentDiv>
      <TitleSpan>{title}</TitleSpan>
      <ContentSpan>
        {content.split('\\n').map( line => {
          return <>{line}<br/></>
        })}
      </ContentSpan>
    </ContentDiv>
  );
}

export default Content;
