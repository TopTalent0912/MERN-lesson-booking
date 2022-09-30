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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <Button variant="contained" sx={{ px: 3 }} startIcon={<SendIcon />}>
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Grid>
</Grid>;
