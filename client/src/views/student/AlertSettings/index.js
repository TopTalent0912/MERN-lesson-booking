import {
  Grid,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Typography
} from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import MainCard from 'ui-component/cards/MainCard';
import { IconLeaf, IconSettings } from '@tabler/icons';

const AlertSetting = () => {
  return (
    <Grid container spacing={2}>
      <PageTitle title="Alert Settings" icon={IconSettings} />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Settings">
            <Grid container justifyContent="center">
              <Grid item xs={10} sm={6} mb={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FormControl>
                    <FormLabel id="class_confirm" sx={{ textAlign: 'center' }}>
                      Class Confirmation
                    </FormLabel>
                    <RadioGroup row name="class_confirm">
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
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
                  <FormControl>
                    <FormLabel id="time_alert" sx={{ textAlign: 'center' }}>
                      Booking Time Alert
                    </FormLabel>
                    <RadioGroup row name="time_alert">
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={10} sm={7} mb={3}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  * All notification will be send via Email
                </Typography>
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
                    startIcon={<IconLeaf />}
                  >
                    Save Settings
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

export default AlertSetting;
