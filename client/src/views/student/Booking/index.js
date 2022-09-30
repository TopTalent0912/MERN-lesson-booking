import {
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import MainCard from 'ui-component/cards/MainCard';
import { IconScript } from '@tabler/icons';
import DataTable from 'ui-component/DataTable';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import DateRangeIcon from '@mui/icons-material/DateRange';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import { IconScriptPlus } from '@tabler/icons';

const columns = [
  { id: 'day', label: 'Day & Date', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 140 },
  { id: 'teacher', label: 'Teacher', minWidth: 110 },
  { id: 'status', label: 'Status', minWidth: 100 }
];

const pastClasses = [
  {
    day: 'Thu 20 Sep, 2022',
    time: '21:32',
    teacher: 'lzat Hafizullah',
    status: 'Booked'
  },
  {
    day: 'Thu 20 Sep, 2022',
    time: '21:32',
    teacher: 'lzat Hafizullah',
    status: 'Booked'
  },
  {
    day: 'Thu 20 Sep, 2022',
    time: '21:32',
    teacher: 'lzat Hafizullah',
    status: 'Booked'
  },
  {
    day: 'Thu 20 Sep, 2022',
    time: '21:32',
    teacher: 'lzat Hafizullah',
    status: 'Booked'
  }
];

const Dashboard = () => {
  const handleDateChange = (e) => {
    console.log(e);
  };
  return (
    <Grid container spacing={2}>
      <PageTitle title="Book Class" icon={IconScript} />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11} sx={{ mb: 3 }}>
          <MainCard title="Booking Information">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="body1">
                The Online Al-Quran Clinic(adults) operates every day from
                Saturday to Wednesday from 10:00 AM to 10:00PM. Each slot is 30
                minutes long. Many childrens's clinics operate daily.
              </Typography>
            </Box>
          </MainCard>
        </Grid>
        <Grid item xs={11}>
          <MainCard title="Timeslot Allocation">
            <Box sx={{}}>
              <Grid item sx={{ mb: 3 }}>
                <Typography variant="body1">
                  Bookings will be opened every Sunday from 8:00 AM to 10:00 PM
                  until next week's timeslot.
                </Typography>
              </Grid>
              <Grid item sx={{ mb: 3 }}>
                <Typography variant="body1">
                  Confirmation of the booking will be sent via email and will be
                  updated in this booking system.
                </Typography>
              </Grid>
              <Grid item container justifyContent="center" alignItems="center">
                <Grid item xs={10} sm={6} mb={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <DateRangeIcon sx={{ mr: 1, my: 0.5 }} />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={new Date('2022', '04', '12')}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ width: '80%' }} />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item xs={10} sm={6} mb={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PunchClockIcon sx={{ mr: 1, my: 0.5 }} />
                    <FormControl sx={{ width: '80%' }}>
                      <InputLabel id="select-label-time">Time</InputLabel>
                      <Select
                        labelId="select-label-time"
                        id="booking-time"
                        label="Time"
                      >
                        <MenuItem value="">
                          <em>Select Time</em>
                        </MenuItem>
                        <MenuItem value={10}>10:00 AM - 10:30 AM</MenuItem>
                        <MenuItem value={10}>10:30 AM - 11:00 AM</MenuItem>
                        <MenuItem value={10}>11:00 AM - 11:30 AM</MenuItem>
                        <MenuItem value={10}>11:30 AM - 12:00 PM</MenuItem>
                        <MenuItem value={10}>12:00 PM - 12:30 PM</MenuItem>
                        <MenuItem value={10}>12:30 PM - 1:00 PM</MenuItem>
                        <MenuItem value={10}>2:00 PM - 2:30 PM</MenuItem>
                        <MenuItem value={10}>2:30 PM - 3:00 PM</MenuItem>
                        <MenuItem value={10}>3:00 PM - 3:30 PM</MenuItem>
                        <MenuItem value={10}>3:30 PM - 4:00 PM</MenuItem>
                        <MenuItem value={10}>4:00 PM - 4:30 PM</MenuItem>
                        <MenuItem value={10}>4:30 PM - 5:00 PM</MenuItem>
                        <MenuItem value={10}>5:00 PM - 5:30 PM</MenuItem>
                        <MenuItem value={10}>8:00 PM - 8:30 PM</MenuItem>
                        <MenuItem value={10}>8:30 PM - 9:00 PM</MenuItem>
                        <MenuItem value={10}>9:00 PM - 9:30 PM</MenuItem>
                        <MenuItem value={10}>9:30 PM - 10:00 PM</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={10} sm={6} mb={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ px: 3 }}
                      startIcon={<IconScriptPlus />}
                    >
                      Book Class
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Past 7 days booking">
            <DataTable columns={columns} rows={pastClasses} />
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
