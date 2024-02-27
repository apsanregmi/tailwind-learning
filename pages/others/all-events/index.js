// Events.js
import React, { useState } from 'react';
import EventCard from '@/src/components/events/EventCard';
import eventData from '../../../data/events/events.json';
import EventDetails from '@/src/components/events/EventDetails';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';
import styles from './Event.module.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <Layout>
        <PageBanner pageName={"Discover Exciting Events"} />

      <div className={styles.eventsContainer}>

        <div className={styles.eventCardsContainer}>
          {eventData.map((event) => (
            <EventCard key={event.id} event={event} onCardClick={handleCardClick} />
          ))}
        </div>

        {selectedEvent && (
          <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
        )}
      </div>
    </Layout>
  );
};

export default Events;
