import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/events";

export default {
  async getAll() {
    const result = await request.get(baseUrl);
    const events = Object.values(result);
    return events;
  },

  getOne(eventId) {
    return request.get(`${baseUrl}/${eventId}`);
  },

  create(eventData) {
    const postData = transformEventData(eventData);
    return request.post(baseUrl, postData);
  },

  edit(eventId, eventData) {
    const postData = transformEventData(eventData);
    return request.put(`${baseUrl}/${eventId}`, {
      ...postData,
      _id: eventId,
    });
  },

  delete(eventId) {
    return request.delete(`${baseUrl}/${eventId}`);
  },
};

function transformEventData(eventData) {
  const { city, street, streetNumber, category, ...transformedData } =
    eventData;
  transformedData.address = { city, street, streetNumber };
  transformedData.category = category;
  transformedData.createdAt = new Date().toISOString();
  transformedData.updatedAt = new Date().toISOString();

  return transformedData;
}
