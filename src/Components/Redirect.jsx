import React from 'react';

import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const RedirectUrl = () => {
  const [search] = useSearchParams();
  const params = search.getAll('token');
  console.log('params =>', params);
  return (
    <Box>
      <Box
        width={'100%'}
        height={300}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box>
          <Typography variant='h4'  component={'h1'}>Your payment is done successfully.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RedirectUrl;
