// src/EventList.js
import React from 'react';
import './Assets/CSS/EventList.css';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <strong>{event.name}</strong>
            <p>{event.description}</p>
            {event.image && <img src={event.image} alt={event.name} className="event-image" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
