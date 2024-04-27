import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        try {
            const response = await axios.get(`/api/events/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Event Details</h1>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Tickets Available: {event.ticketAvailability}</p>
        </div>
    );
};

export default EventDetails;