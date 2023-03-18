import { Button, Grid, Icon, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import React, { useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));
const EditComponent = ({ title, inputs, editHandler }) => {
  const [state, setState] = useState({ date: new Date() });
  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editHandler();
  };
  return (
    <div>
      <h1>{title}</h1>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            {inputs.map((input, index) => (
              <TextField
                key={index}
                type={input.type}
                name={input.name}
                id={input.id}
                // value={input.name || ''}
                onChange={handleChange}
                errorMessages={['this field is required']}
                label={input.label}
                validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
              />
            ))}
          </Grid>

          {/* <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="categoryTitle"
              label="Category Title"
              onChange={handleChange}
              value={categoryTitle || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid> */}
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default EditComponent;
