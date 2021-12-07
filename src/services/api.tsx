import axios from 'axios';
import { verifyErrors } from "../helpers/VerifyErrors"; 

const http = axios.create({
    baseURL: 'http://localhost:4000'
});

export const api = {
    getAllNotes: async () => {
        const res = await http.get('/notes');
        return res.data;
    },

    insertNote: async (title: string) => {
        const res = await http.post('/note', { title, categoryId: 1 });
        const json = await res.data;
    
        verifyErrors(json);
    },
    
    toggleDone: async (id: number) => {
        const res = await http.put(`/note/${id}`);
        const json = res.data;
    
        verifyErrors(json);
    },
    
    removeNote: async (id: number) => {
        const res = await http.delete(`/note/${id}`);
        const json = await res.data;
    
        verifyErrors(json);
    }
}