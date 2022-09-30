import {
  Grid,
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import MainCard from 'ui-component/cards/MainCard';
import { IconUserCircle } from '@tabler/icons';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//Import Icons
import SendIcon from '@mui/icons-material/Send';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import NumbersIcon from '@mui/icons-material/Numbers';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ThreePIcon from '@mui/icons-material/ThreeP';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LanguageIcon from '@mui/icons-material/Language';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PublicIcon from '@mui/icons-material/Public';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
//TODO::Import Tab

const Profile = () => {
  const handleDateChange = (e) => {
    console.log(e);
  };
  return (
    <Grid container spacing={2}>
      <PageTitle title="My Profile" icon={IconUserCircle} />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Personal Information">
            <Grid container justifyContent="center">
              <Grid item xs={10} sm={6} mb={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ThreePIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="fname"
                    label="First Name"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <ThreePIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="lname"
                    label="Last Name"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <InfoIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="ic"
                    label="No I/C"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <HomeWorkIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="homeNo"
                    label="Home No"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <PhoneAndroidIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup row name="gender">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
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
                  <DateRangeIcon sx={{ mr: 1, my: 0.5 }} />
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                      label="Date Of Birth"
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
                  <ShareLocationIcon sx={{ mr: 1, my: 0.5 }} />
                  <FormControl sx={{ width: '80%' }}>
                    <InputLabel id="select-label">Nationality</InputLabel>
                    <Select
                      labelId="select-label"
                      id="nationality"
                      label="Nationality"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
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
                  <LanguageIcon sx={{ mr: 1, my: 0.5 }} />
                  <FormControl sx={{ width: '80%' }}>
                    <InputLabel id="select-label-language">
                      Language Preference
                    </InputLabel>
                    <Select
                      labelId="select-label-language"
                      id="language"
                      label="Language Preference"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    startIcon={<SendIcon />}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Parent/Next-of Kin Details">
            <Grid container justifyContent="center">
              <Grid item xs={10} sm={12} mb={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FamilyRestroomIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="parent-name"
                    label="Name"
                    variant="outlined"
                    sx={{ width: '90%' }}
                  />
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
                  <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="parent-email"
                    label="Email"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <PhoneAndroidIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="parent-phone"
                    label="Phone"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                    startIcon={<SendIcon />}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Residence">
            <Grid container justifyContent="center">
              <Grid item xs={10} sm={6} mb={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <AddHomeIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-addr1"
                    label="Address Line 1"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <AddHomeWorkIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-addr2"
                    label="Address Line 2"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <LocationCityIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-city"
                    label="City"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <EmojiTransportationIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-state"
                    label="State"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <NumbersIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-postal"
                    label="Postal Code"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <PublicIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="residence-country"
                    label="Country"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                    startIcon={<SendIcon />}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Account Details">
            <Grid container justifyContent="center">
              <Grid item xs={10} sm={6} mb={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <KeyOffIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="oldpassword"
                    label="Old Password"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                  <KeyIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="new-password"
                    label="New Password"
                    variant="outlined"
                    sx={{ width: '80%' }}
                  />
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
                    startIcon={<SendIcon />}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
