// Events.js
import React, { useState, useEffect } from 'react';
import EventCard from '@/src/components/events/EventCard';
import eventData from '../../../data/events/events.json';
import EventDetails from '@/src/components/events/EventDetails';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';
import styles from './Event.module.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    // Sort events based on date (nearest first)
    const sortedEvents = eventData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Separate upcoming and past events
    const currentDate = new Date();
    const upcoming = sortedEvents.filter(event => new Date(event.date) >= currentDate);
    const past = sortedEvents.filter(event => new Date(event.date) < currentDate);

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <Layout title={"All Events- CloudProAI"}>
      <div className={styles.eventsContainer}>
        <PageBanner pageName={"Discover Exciting Events"} />

        <div className={styles.eventCardsContainer}>
          {/* Render upcoming events */}
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} onCardClick={handleCardClick} />
          ))}
        </div>

        <div className={styles.successfulEventsContainer}>
          <h2>Our Successful Events</h2>
          {/* Render past events */}
          {pastEvents.map((event) => (
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
