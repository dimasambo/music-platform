import axios from "axios";
import {ITrack} from "../types/track";

export const api = {
    getTracks() {
        return axios.get<ITrack[]>(`http://localhost:3000/tracks`)
            .then(response => response.data)
    },

    getTrack(id: string) {
        return axios.get<ITrack>(`http://localhost:3000/tracks/` + id)
            .then(response => response.data)
    },

    setTrack(track: ITrack) {
        console.log(track)
        return axios.post<ITrack>(`http://localhost:3000/tracks`, track)
            .then(response => response.data)
    },

    /*getComments(track: any) {
        return axios.post<ITrack>(`http://localhost:3000/tracks`, track)
            .then(response => response.data)
    },*/

    setComment(comment: any) {
        return axios.post<any>(`http://localhost:3000/tracks/comment`, comment)
            .then(response => response.data)
    }
}