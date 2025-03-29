import { useEffect } from "react";
import { useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/games';


//Fetcha ll games
export const useGames = () => { 
    const  [games ,setGames] = useState([]);

    useEffect(()=> {
        request.get(baseUrl)
        .then(setGames)
    },[])

    return {games};
}
//Creates a Game
export const useCreateGame = () => {
    const {request} =  useAuth();

    const create  = (gamedata) => {
        request.post(baseUrl,gamedata);
    }

    return {
        create,
    }
}
// Fetching the current game with game id
export const useCurrentGame = (gameId) => {
    const [game, setGame] = useState({}); 
  
    useEffect(() => {
      request.get(`${baseUrl}/${gameId}`).then((data) => {
        setGame(data || {}); 
      });
    }, [gameId]);
  
    return { game };
  };
//edditing the game
export const useEditGame = () => {
    const { request } = useAuth();

    const edit = (gameId, gameData) =>
        request.put(`${baseUrl}/${gameId}`, { ...gameData, _id: gameId });

    return {
        edit,
    }
};

export const useDeleteGame = () => {
    const { request } = useAuth();
    const deleteGame = (gameId) =>
        request.delete(`${baseUrl}/${gameId}`);
    return {deleteGame,}
};

export const useOwnerGames = () => {
    const { _id: userId, request } = useAuth();
    const [ownerGames, setOwnerGames] = useState([]);

    useEffect(() => {
        if (!userId) return;

        // Fetch games that belong to the current user
        request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`)
            .then((data) => setOwnerGames(data || []));
    }, [userId]);

    return { ownerGames };
};