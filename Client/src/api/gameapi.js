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
export const useCurrentGame = (gameid)=>{
const [game,setgame]= useState();
useEffect(()=> {
    request.get(`${baseUrl}/${gameid}`)
    .then(setgame);
},[gameid])

return {
    game,
}
}