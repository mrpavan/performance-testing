import {check} from 'k6';
import http from 'k6/http';
import { sleep } from 'k6';

const URL = 'https://dummyjson.com/products/1'
// const SEARCH_URL = 'https://dummyjson.com/products/search?q=phone'


var params = {
    Headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjlkZDA4MzFmLTM5OWEtNDMwOC1iMjRjLTIzY2Q1M2EyZjdlYiIsImNvdW50cnlDb2RlIjoiIiwiZW1haWwiOiJzaGFraWwuZmFyaGFuQGFkYS1hc2lhLmNvbSIsImV4cCI6MjMwOTQyNTMyMiwiaWF0IjoxNjc4MjczMzIyLCJuYW1lIjoiU2hha2lsIEZhcmhhbiIsInJvbGVDb2RlIjoiT1dORVIiLCJyb2xlSWQiOiJPV05FUiIsInNpZCI6ImFwaWtleSIsInN0eXBlIjoidXNlciIsInVpZCI6IjA5MDdiYmJhLWMzODctNDRlYy05NTcwLTI2M2E4OGI0MzhhNCJ9.JZzVsXeFNUhR25L9ASuAbmJVliF3urqeZx0j1_6XoTU'
    },
};

// Simple Get request for 5 concuerrent in 3 s

export let options = {
    vus: 5,
    duration: '3s'
}


export default function () {
    let res = http.get(URL, params);
    // console.log(res)
    check(res, {
        'is status 200': (r) => r.status ===200
    });
}
