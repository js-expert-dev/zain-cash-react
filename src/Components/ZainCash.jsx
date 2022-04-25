import React, { useState } from 'react';

//package import

import {
  Box,
  Typography,
  Grid,
  Button,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
  Container,
} from '@mui/material';
import axios from 'axios';

//user import

import { URL, API_URL, APP_BASE_URL } from '../config';
import PaymentModal from './Modal'

//component

const ZainCash = () => {
  //states

  const [loader, setLoader] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertIcon, setAlertIcon] = useState('error');
  const [transactionId, setTransactionId] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  //pay api call handler

  const payhandler = () => {
    setLoader(true);
    const data = {
      amount: 250,
      orderId: '25123',
      serviceType: 'e-commerce',
      redirectUrl: APP_BASE_URL + URL?.redirectUrl,
    };

    axios
      .post(API_URL?.pay, data)
      .then((res) => {
        setLoader(false);
        if (res?.status === 200 && res?.data?.status) {
          setTransactionId(res?.data?.data?.transactionId);
          modalOpenHandler()
        } else {
          setAlertOpen(true);
          setAlertMsg(res?.data?.message);
          setAlertIcon('warning');
        }
      })
      .catch((err) => {
        const { response } = err;
        setLoader(false);
        setAlertOpen(true);
        setAlertMsg(response?.data?.message);
        setAlertIcon('error');
      });
  };

  //modal handlers

  const modalOpenHandler =()=>{
    setModalOpen(true)
  }


  const modalCloseHandler =()=>{
    setModalOpen(false)
  }
  //aleert close handler

  const alertCloseHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  //render

  return (
    <Container maxWidth={'sm'}>
      <Typography variant='h4' component={'h1'} align={'center'}>
        your order details
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>order # </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography> 25123</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Amount</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>50</Typography>
          </Grid>
        </Grid>
        <Box>
          <Button variant='outlined' onClick={payhandler}>
            Pay $50
          </Button>
        </Box>
      </Box>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={alertCloseHandler}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
      >
        <Alert
          onClose={alertCloseHandler}
          severity={alertIcon}
          sx={{ width: '100%' }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
      <PaymentModal transactionId={transactionId} open={modalOpen} modalCloseHandler={modalCloseHandler} />
    </Container>
  );
};

export default ZainCash;
