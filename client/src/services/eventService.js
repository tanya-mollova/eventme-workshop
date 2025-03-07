const baseUrl = "http://localhost:3030/jsonstore/events";

export default {
  async getAll() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const events = Object.values(result);
    return events;
  },
  async getOne(eventId) {
    const response = await fetch(`${baseUrl}/${eventId}`);
    const event = await response.json();
    return event;
  },
};
