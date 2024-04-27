import { useEffect, useState } from 'react';
import axios from 'axios';

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Events List</h1>
            {events.map((event) => (
                <div key={event._id}>
                    <h2>{event.title}</h2>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    <p>Tickets Available: {event.ticketAvailability}</p>
                </div>
            ))}
        </div>
    );
};

export default EventsList;