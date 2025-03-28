import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';

// Fetch all comments for a specific game
export const useComments = (gameId) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        request.get(`${baseUrl}?where=gameId%3D%22${gameId}%22`)
            .then((data) => {
                setComments(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [gameId]);

    return { comments, isLoading, error };
};

// Create a new comment
export const useCreateComment = () => {
    const { request } = useAuth();

    const createComment = (commentData) => {
        return request.post(baseUrl, commentData);
    };

    return { createComment };
};

// Edit a comment
export const useEditComment = () => {
    const { request } = useAuth();

    const editComment = (commentId, commentData) => {
        return request.put(`${baseUrl}/${commentId}`, commentData);
    };

    return { editComment };
};

// Delete a comment
export const useDeleteComment = () => {
    const { request } = useAuth();

    const deleteComment = (commentId) => {
        return request.delete(`${baseUrl}/${commentId}`);
    };

    return { deleteComment };
};
