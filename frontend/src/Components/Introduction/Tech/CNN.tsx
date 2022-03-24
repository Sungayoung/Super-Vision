import React from "react"
import './CNN.css'
// Mui
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid'

const layers = [
  {
    id: '',
    color: '',
    description: '',
    title: '',
  }
]

function CNN () {
  return (
    <div>
      <Grid 
        className="CNN"
        container>
        <Grid
          className="cnnName"
          ml = {10}
          item xs={2}
        >
          <h1>Convolution</h1>
          <h1>Neural</h1>
          <h1>Network</h1>
        </Grid>
        {/* <Grid item xs={9}>
          <Item></Item> */}
          <div className="card" >
            <div className="box rotateY">
              <div className="fill brightBox"></div>
            </div>
          </div>
          <div className="card" >
            <div className="box rotateY">
              <div className="fill darkBox"></div>
            </div>
          </div>
          <div className="card" >
            <div className="box rotateY">
              <div className="fill brightBox"></div>
            </div>
          </div>
          <div className="card" >
            <div className="box rotateY">
              <div className="fill darkBox"></div>
            </div>
          </div>
        {/* </Grid> */}
      </Grid>
      
      


    </div>
  )
}

export default CNN