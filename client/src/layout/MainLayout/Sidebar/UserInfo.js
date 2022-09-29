import { Avatar, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/styles';
import User from 'assets/images/users/arti.png';

const UploadLabel = styled('label')(({ theme }) => ({
  borderRadius: '20px',
  padding: '10px',
  backgroundColor: theme.palette.primary.light,
  cursor: 'pointer',
  width: '50%',
  margin: 'auto',
  display: 'block',
  textAlign: 'center',
  '&:hover': {
    boxShadow: `2px 2px 5px ${theme.palette.primary.light}`
  }
}));

const UserInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Avatar
          src={User}
          sx={{
            cursor: 'pointer',
            width: '120px',
            height: '120px',
            display: 'block',
            margin: 'auto'
          }}
          color="inherit"
        />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <UploadLabel htmlFor="upload">+ Upload</UploadLabel>
        <input type="file" hidden id="upload" />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Box sx={{ my: 1 }}>
          <Typography variant="h2">
            {/* TODO:user Name */}
            John Doe
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Enrolled on
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            {/* TODO:class category */}
            Dewasa Package
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
