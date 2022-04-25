import { Fragment } from 'react';
import { Dialog, DialogContent,Box, Button } from '@mui/material';

import { ZAIN_CASH_PAYMENT_URL } from '../config';

const PaymentModal = ({ transactionId, open, modalCloseHandler }) => {
  return (
    <Fragment>
      <Dialog
        open={!!open}
        // onClose={modalCloseHandler}
        maxWidth={'md'}
        
        fullWidth
      >
        <DialogContent>
        <Box>
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="${
                ZAIN_CASH_PAYMENT_URL + transactionId
              }" width="100%" height="450" ></iframe>`,
            }}
          />
          </Box>
        </DialogContent>
        <Box>
          <Button onClick={modalCloseHandler}>
            Close
          </Button>
        </Box>
      </Dialog>
    </Fragment>
  );
};

export default PaymentModal;
