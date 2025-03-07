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
  async create(eventData) {
    const postData = transformEventData(eventData);

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();

    return result;
  },

  async deleteEvent(eventId) {
    const response = await fetch(`${baseUrl}/${eventId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  },
};

function transformEventData(eventData) {
  const { city, street, streetNumber, ...transformedData } = eventData;

  transformedData.address = { city, street, streetNumber };
  transformedData.createdAt = new Date().toISOString();
  transformedData.updatedAt = new Date().toISOString();

  return transformedData;
}
