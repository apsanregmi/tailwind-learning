// // pages/event.js
// import React from 'react';
// import styles from './Event.module.css'
// const eventsData = [
//   { title: 'Event 1', date: '2024-03-01', status: 'upcoming' },
//   { title: 'Event 2', date: '2024-02-15', status: 'finished' },
//   // Add more events as needed
// ];

// const EventPage = () => {
//   const upcomingEvents = eventsData.filter((event) => event.status === 'upcoming');
//   const finishedEvents = eventsData.filter((event) => event.status === 'finished');

//   return (
//     <div className={styles.container}>
//       <h1>Upcoming Events</h1>
//       <ul className={styles.eventList}>
//         {upcomingEvents.map((event) => (
//           <li key={event.title} className={styles.event}>
//             <h2>{event.title}</h2>
//             <p>Date: {event.date}</p>
//             <p>Status: {event.status}</p>
//           </li>
//         ))}
//       </ul>

//       <h1>Finished Events</h1>
//       <ul className={styles.eventList}>
//         {finishedEvents.map((event) => (
//           <li key={event.title} className={styles.event}>
//             <h2>{event.title}</h2>
//             <p>Date: {event.date}</p>
//             <p>Status: {event.status}</p>
//           </li>
//         ))}
//       </ul>
//       <div>
//       <iframe
//         src="https://calendar.google.com/calendar/embed?height=599&wkst=1&ctz=UTC&bgcolor=%23795548&mode=MONTH&title=Cloud%20Pro%20AI&src=cmFwc2FuMzYzQGdtYWlsLmNvbQ&color=%23039BE5"
//         style={{ border: 'solid 5px #777' }}
//         width="800"
//         height="599"
//         frameBorder="0"
//         scrolling="no"
//       ></iframe>
//     </div>
//     </div>
//   );
// };

// export default EventPage;

// all-events.js

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Event.module.css'
const localizer = momentLocalizer(moment);

const allEvents = [
  {
    title: 'Meeting with Client A',
    start: new Date(2024, 1, 23, 10, 0),
    end: new Date(2024, 1, 23, 11, 30),
  },
  {
    title: 'Team Standup',
    start: new Date(2024, 1, 24, 9, 30),
    end: new Date(2024, 1, 24, 10, 0),
  },
  {
    title: 'Product Demo',
    start: new Date(2024, 1, 25, 14, 0),
    end: new Date(2024, 1, 25, 15, 0),
  },
  // Add more events as needed
];

const AllEvents = () => {
  return (
    <div className={styles.calendarContainer}>
      <h1>Your Beautiful Calendar</h1>
      <div className={styles.calendar}>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
      <div className={styles.eventList}>
        <h2>Event List</h2>
        <ul>
          {allEvents.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllEvents;
