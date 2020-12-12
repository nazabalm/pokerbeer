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
      flex: 1,
      margin: 30,
      flexDirection: 'column',
      '& > *': {
        margin: 15,
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

function OrderData() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log('data', data)

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <p className={classes.title}>Datos de contacto</p>
      <div style={{ display: 'flex' }}>
        <TextField required label="Nombre" name="name" inputRef={register} variant="outlined" size="small" style={{ marginRight: 20 }} />
        <TextField required label="Apellido" name="lastName" inputRef={register} variant="outlined" size="small" />
      </div>
      <TextField required label="E-mail" name="email" inputRef={register} variant="outlined" size="small" />
      <TextField required label="Direccion" name="address" inputRef={register} variant="outlined" size="small" />
      <TextField required label="Teléfono" name="phone" inputRef={register} variant="outlined" size="small" />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end', margin: 0 }}>
        <Button text="Siguiente" onClick={() => { }} style={{ width: 200, alignSelf: 'flex-end' }} />
      </div>
    </form>
  );
}

export default OrderData;