import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Fathi = () => {
    const[fathi,setFathi] =useState()
    const ami=() => {
        setFathi("AMINA")
    }
    const krish=() => {
        setFathi("KRISHNA")
    }
    const nafi=() => {
        setFathi("NAFIYA")
    }
    useEffect(() => {ami()},[])
    
   
  
  return (
    <div>
        <Typography variant='h4'>WELCOME  {fathi} </Typography>
        <Button variant="contained" onClick={ami}>Amina</Button>
        &nbsp;
        <Button variant="contained" onClick={krish}>Krishna</Button>
        &nbsp;
        <Button variant="contained" onClick={nafi}>Nafi</Button>
    </div>
  )
}

export default Fathi