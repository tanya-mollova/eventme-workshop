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
      where: "status=true",
    });
    startTransition(() => {
      request.get(`${baseUrl}?${searchParams.toString()}`).then(setEvents);
    });
  }, []);

  return { events, pending };
};

export const useEvent = (eventId) => {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    request.get(`${baseUrl}/${eventId}`).then(setEventData);
  }, [eventId]);

  return {
    eventData,
  };
};

export const useHomeEvents = () => {
  const [homeEvents, setHomeEvents] = useState([]);
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      const searchParams = new URLSearchParams({
        sortBy: "_createdOn desc",
        pageSize: 4,
        where: "status=true",
      });

      request.get(`${baseUrl}?${searchParams.toString()}`).then(setHomeEvents);
    });
  }, []);

  return { homeEvents, pending };
};
export const useMyEvents = () => {
  const userId = useAuth();
  const [myEvents, setMyEvents] = useState([]);
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      const searchParams = new URLSearchParams({
        sortBy: "_createdOn desc",
        where: `_ownerId LIKE "${userId.userId}"`,
      });

      request.get(`${baseUrl}?${searchParams.toString()}`).then(setMyEvents);
    });
  }, []);

  return { myEvents, pending };
};

export const useCreateEvent = () => {
  const { request } = useAuth();

  const create = (eventData) =>
    request.post(baseUrl, transformEventData(eventData));

  return {
    create,
  };
};

export const useEditEvent = () => {
  const { request } = useAuth();

  const edit = (eventId, eventData) => {
    const postData = transformEventData(eventData);
    request.put(`${baseUrl}/${eventId}`, { ...postData, _id: eventId });
  };

  return {
    edit,
  };
};
export const useDeleteEvent = () => {
  const { request } = useAuth();

  const deleteEvent = (eventId) => request.delete(`${baseUrl}/${eventId}`);

  return {
    deleteEvent,
  };
};
function transformEventData(eventData) {
  const { city, street, streetNumber, category, ...transformedData } =
    eventData;
  transformedData.address = { city, street, streetNumber };
  transformedData.category = category;
  return transformedData;
}
