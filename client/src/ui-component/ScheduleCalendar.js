import PropTypes from 'prop-types';
//calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment);

const ScheduleCalendar = (props) => {
  const { eventsList } = props;
  return (
    <Calendar
      localizer={localizer}
      events={eventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      selectable={true}
      onSelectEvent={(event) => {
        console.log('event');
        console.log(event);
      }}
      onClick={(date) => {
        console.log(date);
      }}
    />
  );
};

ScheduleCalendar.propTypes = {
  eventsList: PropTypes.array
};

export default ScheduleCalendar;
