import axios from "axios";

const API_URL = "http://localhost:3000/api/notes/"; 

export const getNotes = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            token: localStorage.getItem("token")
        }
    });
    return response.data;

}

export const getNoteById = async (id) => {
    const response = await axios.get(API_URL + id, {
        headers: {
            token: localStorage.getItem("token")
        }
    });
    return response.data;
}

export const createNote = async (title, content) => {
    const response = await axios.post(API_URL, 
        {title, content},
        {headers : {
            token: localStorage.getItem("token")
        }}
    );
    return response.data;
}

export const updateNote = async (id, title, content) => {
    const response = await axios.put(API_URL + id, {title, content},
        {
            headers: {
                token: localStorage.getItem("token")
            }
        }
    );
    return response.data;
}

export const deleteNote = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
}