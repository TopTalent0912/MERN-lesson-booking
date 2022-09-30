import { Grid } from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import ScheduleCalendar from 'ui-component/ScheduleCalendar';
import MainCard from 'ui-component/cards/MainCard';
import { IconDashboard } from '@tabler/icons';
import DataTable from 'ui-component/DataTable';

//schedule
const events = [
  //TODO: server api
  {
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 2)
  },
  {
    title: 'Lunch',
    start: new Date(2022, 9, 12, 12, 0, 0, 0),
    end: new Date(2022, 9, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    title: 'Meeting',
    start: new Date(2022, 9, 12, 14, 0, 0, 0),
    end: new Date(2022, 9, 12, 15, 0, 0, 0)
  },
  {
    title: 'Happy Hour',
    start: new Date(2022, 8, 12, 17, 0, 0, 0),
    end: new Date(2022, 8, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    title: 'Dinner',
    start: new Date(2022, 8, 12, 20, 0, 0, 0),
    end: new Date(2022, 8, 12, 21, 0, 0, 0)
  },
  {
    title: 'Birthday Party 2',
    start: new Date(2022, 3, 13, 7, 0, 0),
    end: new Date(2022, 3, 13, 10, 30, 0)
  },
  {
    title: 'Birthday Party 3',
    start: new Date(2022, 3, 13, 7, 0, 0),
    end: new Date(2022, 3, 13, 10, 30, 0)
  },
  {
    title: 'Late Night Event',
    start: new Date(2022, 3, 17, 19, 30, 0),
    end: new Date(2022, 3, 18, 2, 0, 0)
  },
  {
    title: 'Multi-day Event',
    start: new Date(2022, 3, 20, 19, 30, 0),
    end: new Date(2022, 3, 22, 2, 0, 0)
  }
];

const columns = [
  { id: 'day', label: 'Day & Date', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 140, align: 'right' },
  { id: 'status', label: 'Status', minWidth: 100, align: 'right' }
];

const rows = [
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' },
  { day: 'Thu 20 Sep, 2022', time: '21:32', status: 'Pending' }
];

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <PageTitle title="Dashboard" icon={IconDashboard} />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="My Schedule">
            <ScheduleCalendar eventsList={events} sx={{ width: '100%' }} />
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Upcoming Classes">
            <DataTable columns={columns} rows={rows} />
          </MainCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={11}>
          <MainCard title="Recent Activity">
            <DataTable columns={columns} rows={rows} />
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
