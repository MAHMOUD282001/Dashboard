import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { Container } from '@mui/system';
import useHttp from 'app/hooks/use-http';

import SimpleForm from 'app/views/material-kit/forms/SimpleForm';
import React, { useState } from 'react';
import EditComponent from '../edit/EditComponent';

function EditEmployee() {
  ////
  const { isLoading, error, requestFn } = useHttp();
  const [state, setState] = useState({ date: new Date() });
  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const { Image, name, revenue, stockStatus } = state;
  const employeeInputs = [
    {
      label: 'Image',
      name: 'image',
      type: 'file',
      onchange: { handleChange },
    },
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      onchange: { handleChange },
    },
    {
      label: 'Revenue',
      name: 'revenue',
      type: 'text',
      onchange: { handleChange },
    },
    {
      label: 'Stock Status',
      name: 'stockStatus',
      type: 'text',
      onchange: { handleChange },
    },
  ];
  ///

  // const editCarHandler = (e) => {
  //   const editedCategory = {
  //     id: oldCategory.id,
  //     addedDate: oldCategory.addedDate,
  //     name: name ? name : oldCategory.type,
  //     type: type ? type : oldCategory.type,
  //     description: description ? description : oldCategory.make,
  //   };
  //   const transformData = (data) => {
  //   };
  //   requestFn(
  //     {
  //       url: `https://cars-3a440-default-rtdb.firebaseio.com/cars/${carId}.json`,
  //       method: "PATCH",
  //       body: editedCategory,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //     transformData
  //   );
  // };
  const editEmployeeHandler = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <EditComponent
        title={'Update Employee'}
        inputs={employeeInputs}
        editHandler={editEmployeeHandler}
      />
    </Container>
  );
}

export default EditEmployee;
