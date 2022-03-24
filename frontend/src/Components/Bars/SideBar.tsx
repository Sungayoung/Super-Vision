import React from "react"
// Local
import './SideBar.css'
import SearchBar from "../Commons/SearchBar"
import SideBarContents from "./SideBarContents";

// mui
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// mui - list 
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
// mui - icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


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


function SideBar() {

  const [open, setOpen,] = React.useState(true)
  const [clickedItems] = React.useState( [false, false, false] );

  function handleClick(id: any) {
      clickedItems[id] = !clickedItems[id];
      setOpen(!open)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, }}
      component="nav"
      aria-labelledby="SideBar"
      subheader={
        <SearchBar></SearchBar>
      }
    >
      {SideBarContents.map((SideBarContent : any) => {
        return (
          <div>
            {/* 1. 목차 */}
            <ListItemButton 
              key={SideBarContent.title}
              onClick={() => handleClick(SideBarContent.id)}
              >
              <ListItemText primary={ SideBarContent.title }/>
                {clickedItems[SideBarContent.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            {/* 1-1. 세부 목차 */}
            <Collapse in={ clickedItems[SideBarContent.id] } timeout="auto" unmountOnExit>
              { SideBarContent.subtitles.map((subtitle : any) => {
                return (
                <ListItemButton 
                  key={ subtitle.title + subtitle.id }
                  sx={{ pl: 4 }}>
                  <ListItemText primary={ subtitle.title } />
                </ListItemButton>
                )
              })}
            </Collapse>
          </div>

        )
      })}
    </List>
  );
}


export default SideBar
