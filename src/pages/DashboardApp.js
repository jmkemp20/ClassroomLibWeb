// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTotalBooks,
  AppCheckedOutBooks,
  AppTotalStudents,
  AppStudentsWithBooks,
  AppLibraryActivity,
  AppClassDispersion
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | ClassroomLib">
      <Container maxWidth="xl">
        <Box sx={{ pb: 1 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalBooks />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCheckedOutBooks />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalStudents />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppStudentsWithBooks />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppLibraryActivity />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppClassDispersion />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
