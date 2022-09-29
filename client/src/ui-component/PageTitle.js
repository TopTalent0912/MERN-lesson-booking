import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

const PageTitle = (props) => {
  const theme = useTheme();
  const { title, icon } = props;
  const TitleIcon = icon;
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={6}
      justifyContent="center"
      container
      direction="row"
      alignItems="center"
      sx={{ borderBottom: `5px solid ${theme.palette.primary.main}`, width: '100%', margin: 'auto' }}
    >
      <TitleIcon stroke={2} size="2.5rem" />
      <Typography variant="h1">{title}</Typography>
    </Grid>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired
};

export default PageTitle;
