// src/EventItem.js
import React from 'react';

const EventItem = ({ event }) => {
  return (
    <li className="event-item">
      <strong>{event.name}</strong>
      <p>{event.description}</p>
      {event.image && <img src={event.image} alt={event.name} className="event-image" />}
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </li>
  );
};

export default EventItem;
