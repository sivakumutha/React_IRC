// src/AddEventForm.js
import React, { useState } from 'react';
import './Asserts/CSS/AddEventForm.css';

const AddEventForm = ({ addEvent }) => {
  const [newEvent, setNewEvent] = useState({ name: '', description: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(newEvent);
    setNewEvent({ name: '', description: '', image: '' });
  };

  return (
    <div className="add-event-form">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={newEvent.image}
            onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
