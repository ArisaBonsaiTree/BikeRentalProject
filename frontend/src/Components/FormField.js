/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const FormField = ({ id, name, label, autoComplete }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        required
        fullWidth
        variant="standard"
        id={id}
        name={name}
        label={label}
        autoComplete={autoComplete}
      />
    </Grid>
  );
};

export default FormField;