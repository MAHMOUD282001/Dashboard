import { Button, Fab, Grid, Icon, IconButton, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../assets/images/default.jpg';
import './myshop.module.css';

const MyShop = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <h2>My Shop Info</h2>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <img className="default" src={img} alt="Default Img" />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <h2>Name: Abc</h2>
          <h4>Phone: 01254569</h4>
          <h4>Address: Eversst Seller</h4>
          <Button variant="contained" onClick={() => navigate('/edit-myShop')}>
            Edit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyShop;
