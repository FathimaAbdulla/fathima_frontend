import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Couter = () => {
    const[counter,setcounter]=useState(0)
  
    const smiubtHandler1=() => {
        setcounter(counter+1)
    }
    const submitHandler=() => {
        setcounter(counter-1)
    }
    return (
    <div>
        <Typography  variant='h4'>count: {counter} </Typography>
        
        &nbsp;
        <Button variant="contained" onClick={smiubtHandler1}>ADD</Button>
        &nbsp;
        <Button variant="contained" onClick={submitHandler}>SUBSTRACT</Button>
    </div>
  )
}

export default Couter