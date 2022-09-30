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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            {/* <DesktopDatePicker
                    label="Date Of Birth"
                    inputFormat="MM/DD/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
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
            <AccountTreeTwoTone sx={{ mr: 1, my: 0.5 }} />
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
            <Button variant="contained" sx={{ px: 3 }} startIcon={<SendIcon />}>
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Grid>
</Grid>;
