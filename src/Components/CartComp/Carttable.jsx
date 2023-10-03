import { Button, Container, FormControlLabel, Grid,Radio,RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import Cartimg from '..//../images/popular4.png.webp'
import Cart2 from '..//../images/popular5.png.webp'

const Carttable = () => {
 function createData(product,title,price,quantity,total) {
  return {product,title,price,quantity,total };
}

const rows = [

 
 createData(Cartimg, 'Minimalistic shop for multipurpose use', '$360.00', 6.0, 24),
 createData(Cart2,'Minimalistic shop for multipurpose use','$360.00', 6.0, 24),
 
];
  return (
    <>
      <div className='mt-5 '></div>
      <div className='pt-5 '></div>
      <div className='mt-5 '></div>
      <TableContainer container component={Container} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
           
              <TableCell align="left"><img src={row.product} alt=""height={100} /><span className='ps-5'>{row.title}</span></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
           <TableRow >
            <TableCell align='left'><Button variant='contained' sx={{backgroundColor:'rgb(253, 143, 95)',padding:'10px 25px'}}>Update Cart</Button></TableCell>
            <TableCell colSpan={7} align='right'><Button variant='contained' sx={{backgroundColor:'rgb(253, 143, 95)',padding:'10px 25px'}}>Close Coupon</Button></TableCell>
           </TableRow>
           <TableRow>
            <TableCell  align='right' colspan={3}><span className="fs-6">Sub Total:</span></TableCell>
            <TableCell align="right" colspan={6}><span className="fs-6">$879.00</span></TableCell>
           </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  )
}

export default Carttable
