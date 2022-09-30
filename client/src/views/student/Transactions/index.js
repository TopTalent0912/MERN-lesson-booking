import { Grid, Typography, Box } from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import MainCard from 'ui-component/cards/MainCard';
import { IconBrowserCheck } from '@tabler/icons';
import DataTable from 'ui-component/DataTable';

//paypal button
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js';

const paypalScriptOptions = {
  'client-id': 'test',
  currency: 'USD',
  components: 'buttons'
};

const columns = [
  { id: 'invoice', label: 'Invoice Number', minWidth: 170 },
  { id: 'day', label: 'Day & Date', minWidth: 140 },
  { id: 'package', label: 'Package', minWidth: 110 },
  { id: 'status', label: 'Status', minWidth: 100 }
];

const pastTransactions = [
  {
    day: 'Thu 20 Sep, 2022',
    invoice: 'QUR 015',
    package: 'Dewasa',
    status: 'Paid'
  },
  {
    day: 'Thu 21 Sep, 2022',
    invoice: 'QUR 016',
    package: 'Dewasa',
    status: 'Paid'
  },
  {
    day: 'Thu 22 Sep, 2022',
    invoice: 'QUR 017',
    package: 'Kanak-Kanak Asas',
    status: 'Paid'
  },
  {
    day: 'Thu 23 Sep, 2022',
    invoice: 'QUR 018',
    package: 'Dewasa',
    status: 'Paid'
  },
  {
    day: 'Thu 24 Sep, 2022',
    invoice: 'QUR 019',
    package: 'Kanak-Kanak Asas',
    status: 'Paid'
  }
];

const PPBtn = () => {
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps = {
    style: { layout: 'vertical' },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: '0.01'
            }
          }
        ]
      });
    },
    onApprove(data, actions) {
      return actions.order.capture({}).then((details) => {
        alert(
          'Transaction completed by ' +
            (details?.payer.name.given_name ?? 'No details')
        );
        alert('Data details: ' + JSON.stringify(data, null, 2));
      });
    }
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
};

const Transaction = () => {
  return (
    <Grid container spacing={2}>
      <PageTitle title="Subscriptions & Transactions" icon={IconBrowserCheck} />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11} sx={{ mb: 3 }}>
          <MainCard title="Current Plan Details">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Package User Type: &nbsp;</Typography>
              <Typography variant="h4">
                Adult
                {/* TODO: data using api */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Package Name: &nbsp;</Typography>
              <Typography variant="h4">
                Dewasa
                {/* TODO: data using api */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Time: &nbsp;</Typography>
              <Typography variant="body1">
                9.30pm - 10.00pm , 9pm- 9.30pm , 8.30pm - 9pm , 8pm - 8.30pm ,
                5.00pm - 5.30pm , 4.30pm - 5.00pm , 4pm - 4.30pm , 3.30pm -
                4.00pm , 3.00pm - 3.30pm , 2.30pm - 3.00pm , 2pm - 2.30pm ,
                12.30pm -1pm , 11.30am - 12pm , 11am- 11.30am , 10.30am - 11am ,
                10am - 10.30am
                {/* TODO: data using api */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Duration: &nbsp;</Typography>
              <Typography variant="h4">
                30
                {/* TODO: data using api */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Price: &nbsp;</Typography>
              <Typography variant="h4">
                200
                {/* TODO: data using api */}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">Number Of Class: &nbsp;</Typography>
              <Typography variant="h4">
                12
                {/* TODO: data using api */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="h4">
                Number Of Timeslot Per Day: &nbsp;
              </Typography>
              <Typography variant="h4">
                13
                {/* TODO: data using api */}
              </Typography>
            </Box>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Pay / Renew">
            <Grid container justifyContent="center">
              <Grid item xs={11} sm={8} lg={6}>
                <PayPalScriptProvider options={paypalScriptOptions}>
                  <PPBtn />
                </PayPalScriptProvider>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Past Transactions">
            <DataTable columns={columns} rows={pastTransactions} />
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Transaction;
