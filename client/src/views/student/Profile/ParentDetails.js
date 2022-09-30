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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <Button variant="contained" sx={{ px: 3 }} startIcon={<SendIcon />}>
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Grid>
</Grid>;
