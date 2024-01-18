import axios from "axios";


const calendarApi=axios.create({
baseURL:'https://pokeapi.co/api/v2/pokemon?limit='})

//todo: configurar interceptores

export default calendarApi