import { Button, Container, Grid, Icon, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import React, { useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
  
  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));


const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

function EditMyShop() {
  const [state, setState] = useState({ date: new Date() });

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { name, phone, address, photo } = state;

  return (
    <Container>
      <h2>Edit My Shop</h2>

      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={name || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Name"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            />

            <TextField
              type="text"
              name="address"
              id="standard-basic"
              value={address || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Address"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="number"
              name="phone"
              label="Phone"
              onChange={handleChange}
              value={phone || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <input
              accept="image/*"
              className="file-input"
              id="outlined-button-file"
              multiple
              type="file"
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <label htmlFor="outlined-button-file">
              <StyledButton variant="outlined" component="span">
                Upload Photo
              </StyledButton>
            </label>
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </Container>
  );
}

export default EditMyShop;