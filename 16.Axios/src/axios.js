import axios from 'axios'

const axionsInstance = axios. create({
    baseURL:'https://699451fafade7a9ec0f50362.mockapi.io/api/v1/',
    responseType:'json',
    timeout:1000
})

export {axionsInstance}