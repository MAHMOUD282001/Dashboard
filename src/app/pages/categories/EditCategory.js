import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { Container } from '@mui/system';
import useHttp from 'app/hooks/use-http';
import SimpleForm from 'app/views/material-kit/forms/SimpleForm';
import React, { useState } from 'react';
import EditComponent from '../edit/EditComponent';

function EditCategory() {
  ////
  const { isLoading, error, requestFn } = useHttp();
  const [state, setState] = useState({ date: new Date() });
  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const { name, type, description } = state;
  const categoryInputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'name',
      onchange: { handleChange },
    },
    {
      label: 'Type',
      name: 'type',
      type: 'text',
      placeholder: 'type',
      onchange: { handleChange },
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textArea',
      placeholder: 'description',
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
  const editCategoryHandler = (e) => {
    console.log(e);
  };
  return (
    <Container>
      {/* <h2>Update Category 1</h2> */}
      {/* <EditForm/> */}
      <EditComponent
        title={'Update Category'}
        inputs={categoryInputs}
        editHandler={editCategoryHandler}
      />
    </Container>
  );
}

export default EditCategory;
