import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import label from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';

const Home = () => {
  return (
    <>
    <h3>CheckBoxes</h3>
 <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
<Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
      />
          <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="warning" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[300],
          '&.Mui-checked': {
            color: pink[300],
          },
        }}
      />

 <h2>Buttons</h2>
<ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
    </>
  )
}

export default Home