import { useEffect, useState, useTransition } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/events";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      // select: "_id,imageUrl,title,description,address,price",
    });
    startTransition(() => {
      request.get(`${baseUrl}?${searchParams.toString()}`).then(setEvents);
    });
  }, []);

  return { events };
};

export const useEvent = (gameId) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    request.get(`${baseUrl}/${eventId}`).then(setEvent);
  }, [eventId]);

  return {
    event,
  };
};

export const useLatestEvents = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: 4,
      // select: "_id,imageUrl,title,description,address,price",
    });
    startTransition(() => {
      request
        .get(`${baseUrl}?${searchParams.toString()}`)
        .then(setLatestEvents);
    });
  }, []);

  return { latestEvents };
};

export const useCreateEvent = () => {
  const { request } = useAuth();

  const create = (eventData) => request.post(baseUrl, eventData);

  return {
    create,
  };
};

export const useEditEvent = () => {
  const { request } = useAuth();

  const edit = (eventId, eventData) =>
    request.put(`${baseUrl}/${eventId}`, { ...eventData, _id: eventId });

  return {
    edit,
  };
};

export const useDeleteEvent = () => {
  const { request } = useAuth();

  const deleteEvent = (eventId) => request.delete(`${baseUrl}/${eventd}`);

  return {
    deleteEvent,
  };
};
