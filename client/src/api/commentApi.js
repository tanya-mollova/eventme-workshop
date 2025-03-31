import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/comments";

export const useComments = (eventId) => {
  const { request } = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `eventId="${eventId}"`,
      load: `author=_ownerId:users`,
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then((result) => {
      setComments(result);
    });
  }, []);
  return {
    comments,
    addComment: (newComment) => {
      setComments((comments) => [...comments, newComment]);
    },
  };
};

export const useDeleteComment = () => {
  const { request } = useAuth();
  const deleteComment = (commentId) =>
    request.delete(`${baseUrl}/${commentId}`, null, {
      headers: {
        "X-admin": "x-admin",
      },
    });

  return {
    deleteComment,
  };
};
export const useCreateComment = () => {
  const { request } = useAuth();

  const create = (eventId, comment) => {
    const postData = {
      eventId,
      comment,
    };

    return request.post(baseUrl, postData);
  };

  return {
    create,
  };
};
