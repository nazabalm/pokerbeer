import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import theme from 'theme';
import { Button } from 'components/common';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: 15,
        width: '25ch',
      },
    },

    title: {
      fontSize: 26,
      color: theme.palette.primary,
    },

    inputsContainer: {
    }
  }),
);

type Inputs = {
  name: string,
  lastName: string,
  email: string;
  address: string;
  phone: string;
};

export default function BasicTextFields() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log('data', data)

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <p className={classes.title}>Datos de contacto</p>
      <TextField required label="Nombre" name="name" inputRef={register} variant="outlined" size="small" />
      <TextField required label="Apellido" name="lastName" inputRef={register} variant="outlined" size="small" />
      <TextField required label="E-mail" name="email" inputRef={register} variant="outlined" size="small" />
      <TextField required label="Direccion" name="address" inputRef={register} variant="outlined" size="small" />
      <TextField required label="Teléfono" name="phone" inputRef={register} variant="outlined" size="small" />
      <Button text="Siguiente" onClick={() => { }} />
    </form>
  );
}