import axios from "axios";
import axiosCancel from 'axios-cancel';
import {BASE_URL} from "../constants"

//any global headers go here.
let headers = {
    Accept: "application/json",
};

// create axios instance
export const Axios = axios.create({
    baseURL: BASE_URL + "/",
    headers: headers,
});

// Using this because we might have to cancel requests
axiosCancel(Axios, {
    debug: false // default
})