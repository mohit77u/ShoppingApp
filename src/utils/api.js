import axios from "axios";
export const API_BASE_URL = 'http://localhost:4000/api'

// get data to api helepr
export const getApiData = (url, params) => {
    let parameters = ''
    if(params != undefined) {
        parameters = params ? '/' + params : ''
    } 

    axios.get(API_BASE_URL + url + parameters)
    .then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

// post data to api helepr
export const postApiData = (url, params, postData) => {
    let parameters = ''
    if(params != undefined) {
        parameters = params ? '/' + params : ''
    } 

    axios.post(API_BASE_URL + url + parameters, postData)
    .then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}