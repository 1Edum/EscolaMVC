import { useEffect } from "react";
import { useState } from "react"

const useRoomCount = () =>{
    const[roomCount, setRoomCount]= useState(0);

    useEffect(() =>{
        const fetchRoomCount = async () =>{
            try{
                const response = await fetch('/api/roomCount');
                const data = await response.json();
                setRoomCount(data.count);
            }catch (error){
                console.error('Erro ao buscar a contagem de salas:', error)
            }
        }
        fetchRoomCount()
    },[])
    return roomCount
}

export default useRoomCount