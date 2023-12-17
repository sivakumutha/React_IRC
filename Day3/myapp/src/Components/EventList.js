// src/EventList.js
import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
