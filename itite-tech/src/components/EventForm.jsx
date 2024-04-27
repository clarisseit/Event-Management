import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EventForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [ticketAvailability, setTicketAvailability] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/events', {
                title,
                date,
                location,
                ticketAvailability,
            });
            history.push(`/event/${response.data._id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tickets Availability:</label>
                    <input
                        type="number"
                        value={ticketAvailability}
                        onChange={(e) => setTicketAvailability(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default EventForm;