import { useEffect } from "react";
import { useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/games';



export const useGames = () => { 
    const  [games ,setGames] = useState([]);
       
    useEffect(()=> {
        request.get(baseUrl)
        .then(setGames)
    },[])

    return {games};
}
export const useCreateGame = () => {
    const {request} =  useAuth();

    const create  = (gamedata) => {
        request.post(baseUrl,gamedata);
    }

    return {
        create,
    }
}