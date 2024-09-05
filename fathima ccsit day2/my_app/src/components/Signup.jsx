
import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
    
      <TextField label="name" variant="outlined"></TextField><br/><br/>
      <TextField label="password" variant="outlined"></TextField><br/><br/>
      <Button variant="contained">SUBMIT</Button>
     
     
        </div>
  )
}

export default Signup