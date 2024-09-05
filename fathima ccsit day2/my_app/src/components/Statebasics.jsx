import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setFname]=useState()
    var[val,setVal]=useState()
    const handleInput=(e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
    const submitHandler= () => {
        console.log("clicked");
    setVal(fname)
    }
  return (
    <div>
        <Typography variant='h4'>welcome {val} </Typography>
        <TextField  variant="outlined" label='enter your name' onChange={handleInput}/>
        <Button variant="contained" onClick={submitHandler}>click</Button>
        </div>
  )
}

export default Statebasics